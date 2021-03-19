<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Relative Frequency Histogram</title>
    <script src="https://www.koolchart.com/demo/LicenseKey/codepen/KoolChartLicense.js"></script>
    <script src="https://www.koolchart.com/demo/KoolChart/JS/KoolChart.js"></script>
    <link rel="stylesheet" href="https://www.koolchart.com/demo/KoolChart/Assets/Css/KoolChart.css" />
    <script src="js.js"></script>
</head>
<body>
    <form id="form1" runat="server">

        <h1>1,800 Randomly Selected Values from a Uniform Distribution</h1>
        <div id="chartHolder" style="height: 500px; width: 100%;"></div>

        <h1>Means of 60 Samples (n = 5) from a Uniform Distribution</h1>
        <div id="chartHolder5" style="height: 500px; width: 100%;"></div>

        <h1>Means of 60 Samples (n = 30) from a Uniform Distribution</h1>
        <div id="chartHolder30" style="height: 500px; width: 100%;"></div>

    </form>
</body>
</html>
