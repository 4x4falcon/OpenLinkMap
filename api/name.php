<?php
	/*
	OpenLinkMap Copyright (C) 2010 Alexander Matheisen
	This program comes with ABSOLUTELY NO WARRANTY.
	This is free software, and you are welcome to redistribute it under certain conditions.
	See olm.openstreetmap.de/info for details.
	*/


	require_once("functions.php");
	// including translation file
	require_once("../".includeLocale($_GET['lang']));

	$id = $_GET['id'];
	$type = $_GET['type'];
	$format = $_GET['format'];
	$lang = $_GET['lang'];


	// prohibition of sql injections
	if (!isValidType($type) || !isValidId($id))
		exit;

	// get the most important langs of the user
	if (isset($lang))
		$langs = array($lang);
	else
		$langs = getLangs();

	// connnecting to database
	$connection = connectToDatabase($db);
	// if there is no connection
	if (!$connection)
		exit;

	// request
	$request = "SELECT
			tags->'name' AS \"name\",
			tags->'name:".$langs[0]."' AS \"name1\"
		FROM ".$type."s WHERE (id = ".$id.");";
	$response = requestDetails($request, $connection, $type);
	pg_close($connection);

	if ($response)
	{
		$element = $response[0];
		$name = getNameDetail(array($element["name1"], $element["name"]));

		// check if name or name:** of user's first language was choosen
		if ($name == $element["name1"])
			$selectedLang = $langs[0];
		else
			$selectedLang = false;

		if ($format == "xml")
			echo xmlNameOut($name, $selectedLang, $id, $type);
		else
			echo textNameOut($name);
	}
	else
		echo "NULL";


	// output of name data in plain text format
	function textNameOut($name)
	{
		global $translations;

		if ($name)
		{
			// setting header
			header("Content-Type: text/html; charset=UTF-8");
			$output = "<meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\">\n";
			$output .= "<strong class=\"clusterName\">".$name."</strong><br />\n";

			return $output;
		}
		else
		{
			// setting header
			header("Content-Type: text/html; charset=UTF-8");
			$output = "<meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\">\n";
			$output .= "<strong class=\"clusterName\">- ".$translations['captions']['unnamed']." -</strong><br />\n";

			return $output;
		}
	}


	// output of name data in xml format
	function xmlNameOut($name, $lang, $id, $type)
	{
		if ($name)
		{
			$output = xmlStart("names");
			$output .= "<name id=\"".$id."\" type=\"".$type."\"";
			if ($lang)
				$output .= " lang=\"".$lang."\"";
			$output .= ">".$name."</name>";
			$output .=  "</names>";

			return $output;
		}
		else
		{
			$output = xmlStart("names");
			$output .= "<name id=\"".$id."\" type=\"".$type."\"";
			if ($lang)
				$output .= " lang=\"".$lang."\"";
			$output .= ">NULL</name>";
			$output .=  "</names>";

			return $output;
		}
	}
?>