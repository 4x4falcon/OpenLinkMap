/*
OpenLinkMap Copyright (C) 2010 Alexander Matheisen
This program comes with ABSOLUTELY NO WARRANTY.
This is free software, and you are welcome to redistribute it under certain conditions.
See olm.openstreetmap.de/info for details.
*/

// translations of labels
var translations =
{
	"back" : "�����",
	"details" : "���������", 
	"search" : "�����",
	"spam" : "�������� �� ������ �� �����",
	"title" : "����� � ������ ����� � <a href=\"http://www.openstreetmap.org/\">OpenStreetMap</a> �� �������� <a href=\"http://creativecommons.org/licenses/by-sa/2.0/deed.en\" title=\"CC-BY-SA 2.0\">CC-BY-SA 2.0 License</a>.<br />����� �����: <a href=\"http://nasa.gov/\">NASA SRTM</a>.",
	"info" : "� �����",
	"contact" : "��������� � ����",
	"loading" : "��������...",
	"nothing" : "������ �� �������.",
	"nothingmore" : "������ ��� �����������.",
	"update" : "��������� ����������:",
	"showMarker" : "��������� ������� ��� ����������� �����",
	"empty" : "������ ����.",
	"more" : "������ ������",
	"moreresults" : "��� ����������...",
	"less" : "������",
	"hide" : "��������",
	"show" : "��������",
	"permalink" : "���������� ������",
	"finish" : "���������",
	"markerLoading" : "�������� �����...",
	"hillshading" : "����� �����", 
	"object" : "POI-����������", 
	"marker" : "�����",
	"searchresults" : "���������� ������",
	"routing" : "�������",
	"searchoption" : "������ ������ �� ������� ������� �����",
	"close" : "������� ��� ��������",
	"ad" : "��������������� ������! ��������� ������������ ������ �� ���-����� � ������� ������ ���������� ���-������ �� Keepright!",
	"inolm" : "�������� � OpenLinkMap...",
	"embed" : "HTML-���",
	"embeddescription" : "Copia questo codice HTML sul tuo sito web per mostrare una piccola mappa con un pennarello.",
	"embedattricution" : '������ ����� &copy; <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> � ���������� <a href="http://creativecommons.org/licenses/by-sa/2.0/deed.en" target="_blank">CC-BY-SA</a>'
};

// descriptions for search results
var descriptions =
{
	"city" : "#county#, #state#, #country#",
	"country" : "",
	"county" : "#state#, #country#",
	"footway" : "#city#, #county#, #country#",
	"hamlet" : "#county#, #country#",
	"house_number" : "#city#, #county#, #country#",
	"island" : "#state#, #country#",
	"isolated_dwelling" : "#county#, #state#, #country#",
	"locality" : "#county#, #state#, #country#",
	"place" : "#county#, #state#, #country#",
	"postcode" : "#county#, #state#, #country#",
	"region" : "#country#",
	"road" : "#city#, #county#, #country#",
	"state" : "#country#",
	"state_district" : "#state#, #country#",
	"suburb" : "#city#, #county#, #country#",
	"town" : "#state#, #country#",
	"village" : "#county#, #country#",
	"poi" : "#footway# #road# #house_number#, #postcode# #village# #city#, #country#",
	"name" : "#footway# #road# #house_number#"
};

// translations of OpenLayers
OpenLayers.Lang.ru =
{
	'unhandledRequest': "�������������� ��������� ������� ${statusText}",
	'Permalink': "���������� ������",
	'Overlays': "����",
	'Base Layer': "��������",
	'sameProjection': "�������� ����� �������� ������ � ��� �� ��������, ��� � ���������", 
	'readNotImplemented': "������ �� �����������.",
	'writeNotImplemented': "������ �� �����������.",
	'noFID': "���������� �������� �������� ��� FID.",
	'errorLoadingGML': "������ ��� �������� GML ����� ${url}",
	'browserNotSupported': "��� ������� �� ������������ ��������� ������������. � ��������� ����� �������������� ����� �������������:\n${renderers}",
	'componentShouldBe': "addFeatures : ��������� ������ ���� ���� ${geomType}",
	'getFeatureError':
		"getFeatureFromEvent ������� �� ���� ��� �������������. ������ ��� ������� ���, ��� �� " +
		"������� ����, �� �� ������� ��������� � ��� ���������� �������.",
	'minZoomLevelError':
		"�������� minZoomLevel ������������� ��� ������������� ������ " +
		"�� ������-������������ FixedZoomLevels. ��, ���  " +
		"���� wfs ��������� minZoomLevel, �������� ���������� " +
		"��������. ������, �� �� ����� ��������� ��� ��� ��������� " +
		"����� ����������, ���������� �� OL � ��������� �� �����." +
		" �������� �� minZoomLevel ����� ������� � ������ 3.0. �� ����� " +
		"����� ������� ������� ��� ����������. ������ ����, ����������, " +
		"����������� ��������� ���������� min/max ��� ������� �����: " +
		"http://trac.openlayers.org/wiki/SettingZoomLevels",
	'commitSuccess': "WFS ����������: SUCCESS ${response}",
	'commitFailed': "WFS ����������: FAILED ${response}",
	'googleWarning':
		"���� Google Layer �� ���� ��������� �����������.<br><br>" +
		"���� ������ ��� ���������, �������� ������ ���� �������� " +
		"� ������������� ����� � ������ ������� ����.<br><br>" +
		"������ �����, ��� ��������� ��-�� ����, ��� ���������� �������� Google Maps " +
		"���� �� ���� ��������, ���� �� �������� � ���� ���������� API ���� " +
		"��� ������ �����.<br><br>" +
		"��� �������������: ���� �� ������ ������ ��������� ��� �������������, " +
		"<a href='http://trac.openlayers.org/wiki/Google' " +
		"target='_blank'>������� ����</a>",
	'getLayerWarning':
		"���� ${layerType} Layer �� ���� ��������� �����������.<br><br>" +
		"���� ������ ��� ���������, �������� ������ ���� �������� " +
		"� ������������� ����� � ������ ������� ����.<br><br>" +
		"������ �����, ��� ��������� ��-�� ����, ��� ���������� ${layerLib} " +
		"���� �� ���� ��������, ���� �� �������� � ���� ���������� API ���� " +
		"��� ������ �����.<br><br>" +
		"��� �������������: ���� �� ������ ������ ��������� ��� �������������, " +
		"<a href='http://trac.openlayers.org/wiki/${layerLib}' " +
		"target='_blank'>������� ����</a>",
		'Scale = 1 : ${scaleDenom}': "������� = 1 : ${scaleDenom}",
	'W': '�',
	'E': '�',
	'N': '�',
	'S': '�',
	'graticule': '������������ �����',
	'layerAlreadyAdded': "�� ��������� ��������� � ����� ����: ${layerName}, ������� ��� ��� ��������",
	'reprojectDeprecated':
		"�� ����������� ����� 'reproject' " +
		"�� ���� ${layerName}. ��� ����� ��������: " +
		"� ������������� ���� �������������� ��� ��������� ����������� ������ � ������������ " +
		"������, �� �� ������ ������ ��� ���������������� ������ ���� �������� �������������� ��������� " +
		"Spherical Mercator. ����� ��������� ���������� �������� �� " +
		"http://trac.openlayers.org/wiki/SphericalMercator.",
	'methodDeprecated':
		"����� ������� � ����� ������ �� ������ 3.0. " +
		"����������, ����������� ${newMethod} ������ ����.",
	'boundsAddError': "�� ������ ������ ��� �������� - � � � - � ������ ����������.",
	'lonlatAddError': "�� ������ ������ ��� �������� - ������ � ������� - � ������� ����������.",
	'pixelAddError': "�� ������ ������ ��� �������� - � � � - � ������ ����������.",
	'unsupportedGeometryType': "���������������� �������������� ���: ${geomType}",
	'pagePositionFailed': "OpenLayers.Util.pagePosition failed: ������� � id ${elemId} ����� ���� ���������.",
	'filterEvaluateNotImplemented': "evaluate �� ���������������� ��� ����� ���� �������.",
	'end': '',
	'proxyNeeded': "�������� ��� ���������� ���������� OpenLayers.ProxyHost ��� ������� � ${url}."+
	"�������� �� http://trac.osgeo.org/openlayers/wiki/FrequentlyAskedQuestions#ProxyHost",
};
