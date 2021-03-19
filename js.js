var chartVars = "KoolOnLoadCallFunction=chartReadyHandler";
KoolChart.create("chart1", "chartHolder", chartVars, "100%", "100%");

function chartReadyHandler(id) {
    document.getElementById(id).setDataType("json");
    document.getElementById(id).setLayout(layoutStr);
    document.getElementById(id).setDataURL("singleData.txt");
}

var chartVars5 = "KoolOnLoadCallFunction=chartReadyHandler5";
KoolChart.create("chart5", "chartHolder5", chartVars5, "100%", "100%");

function chartReadyHandler5(id) {
    document.getElementById(id).setDataType("json");
    document.getElementById(id).setLayout(layoutStr5);
    document.getElementById(id).setDataURL("singleData5.txt");
}

var chartVars30 = "KoolOnLoadCallFunction=chartReadyHandler30";
KoolChart.create("chart30", "chartHolder30", chartVars30, "100%", "100%");

function chartReadyHandler30(id) {
    document.getElementById(id).setDataType("json");
    document.getElementById(id).setLayout(layoutStr5);
    document.getElementById(id).setDataURL("singleData30.txt");
}
var layoutStr =
  '<KoolChart backgroundColor="0xFFFFFF"  borderStyle="none">'
   + '<Options>'
    + '<Caption text="" />'
   + '</Options>'
   + '<NumberFormatter id="nft" precision="2" rounding="nearest"/>'
   + '<Histogram2DChart showDataTips="true" binRange="[0.0,0.5,1.0,1.5,2.0,2.5,3.0,3.5,4.0,4.5,5.0]">'
    + '<verticalAxis>'
     + '<LinearAxis id="vAxis1" title="( Unit )"/>'
    + '</verticalAxis>'
    + '<horizontalAxis>'
     + '<HistogramCategoryAxis id="hAxis" categoryField="histogramXField"/>'
    + '</horizontalAxis>'
    + '<series>'
     + '<Histogram2DSeries formatter="{nft}" labelPosition="inside" yField="vRandom" displayName="Number of Count" itemRenderer="BoxItemRenderer" labelAlign="bottom" insideLabelYOffset="-10" color="#ffffff">'
      + '<showDataEffect>'
       + '<SeriesInterpolate/>'
      + '</showDataEffect>'
      + '<fill>'
       + '<SolidColor color="#5587a2"/>'
      + '</fill>'
     + '</Histogram2DSeries>'
     + '<Line2DSeries yField="relativeFrequency">'
      + '<lineStroke>'
       + '<Stroke color="#f4a44f" weight="3"/>'
      + '</lineStroke>'
      + '<verticalAxis>'
       + '<LinearAxis id="vAxis2" title="Relative Frequency"/>'
      + '</verticalAxis>'
      + '<showDataEffect>'
       + '<SeriesInterpolate/>'
      + '</showDataEffect>'
     + '</Line2DSeries>'
    + '</series>'
    + '<horizontalAxisRenderers>'
     + '<HistogramAxis2DRenderer axis="{hAxis}" showLine="false"/>'
    + '</horizontalAxisRenderers>'
    + '<verticalAxisRenderers>'
     + '<Axis2DRenderer axis="{vAxis1}" placement="left" verticalAxisTitleAlignment="vertical" axisTitleStyleName="titleStyle">'
      + '<axisStroke>'
       + '<Stroke color="#56a1bf" weight="4"/>'
      + '</axisStroke>'
     + '</Axis2DRenderer>'
     + '<Axis2DRenderer axis="{vAxis2}" placement="right" axisTitleStyleName="titleStyle">'
      + '<axisStroke>'
       + '<Stroke color="#2C78B6" weight="4"/>'
      + '</axisStroke>'
     + '</Axis2DRenderer>'
    + '</verticalAxisRenderers>'
   + '</Histogram2DChart>'
   + '<Style>'
    + '.titleStyle{fontFamily:"Malgun Gothic";fontWeight:bold;}'
   + '</Style>'
  + '</KoolChart>';

var layoutStr5 =
  '<KoolChart backgroundColor="0xFFFFFF"  borderStyle="none">'
   + '<Options>'
    + '<Caption text="" />'
   + '</Options>'
   + '<NumberFormatter id="nft" precision="2" rounding="nearest"/>'
   + '<Histogram2DChart showDataTips="true" binRange="[1,1.25,1.50,1.75,2,2.25,2.50,2.75,3,3.25,3.50,3.75,4,4.25,4.50,4.75,5]">'
    + '<verticalAxis>'
     + '<LinearAxis id="vAxis1" title="( Unit )"/>'
    + '</verticalAxis>'
    + '<horizontalAxis>'
     + '<HistogramCategoryAxis id="hAxis" categoryField="histogramXField"/>'
    + '</horizontalAxis>'
    + '<series>'
     + '<Histogram2DSeries formatter="{nft}" labelPosition="inside" yField="vRandom" displayName="Number of Count" itemRenderer="BoxItemRenderer" labelAlign="bottom" insideLabelYOffset="-10" color="#ffffff">'
      + '<showDataEffect>'
       + '<SeriesInterpolate/>'
      + '</showDataEffect>'
      + '<fill>'
       + '<SolidColor color="#5587a2"/>'
      + '</fill>'
     + '</Histogram2DSeries>'
     + '<Line2DSeries yField="relativeFrequency">'
      + '<lineStroke>'
       + '<Stroke color="#f4a44f" weight="3"/>'
      + '</lineStroke>'
      + '<verticalAxis>'
       + '<LinearAxis id="vAxis2" title="Relative Frequency"/>'
      + '</verticalAxis>'
      + '<showDataEffect>'
       + '<SeriesInterpolate/>'
      + '</showDataEffect>'
     + '</Line2DSeries>'
    + '</series>'
    + '<horizontalAxisRenderers>'
     + '<HistogramAxis2DRenderer axis="{hAxis}" showLine="false"/>'
    + '</horizontalAxisRenderers>'
    + '<verticalAxisRenderers>'
     + '<Axis2DRenderer axis="{vAxis1}" placement="left" verticalAxisTitleAlignment="vertical" axisTitleStyleName="titleStyle">'
      + '<axisStroke>'
       + '<Stroke color="#56a1bf" weight="4"/>'
      + '</axisStroke>'
     + '</Axis2DRenderer>'
     + '<Axis2DRenderer axis="{vAxis2}" placement="right" axisTitleStyleName="titleStyle">'
      + '<axisStroke>'
       + '<Stroke color="#2C78B6" weight="4"/>'
      + '</axisStroke>'
     + '</Axis2DRenderer>'
    + '</verticalAxisRenderers>'
   + '</Histogram2DChart>'
   + '<Style>'
    + '.titleStyle{fontFamily:"Malgun Gothic";fontWeight:bold;}'
   + '</Style>'
  + '</KoolChart>';