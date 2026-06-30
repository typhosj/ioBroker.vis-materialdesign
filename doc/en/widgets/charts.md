# Charts

[Back to README](../../../README.md#widget-documentation)

### Bar Chart

![Logo](../media/barChart.png)

#### Editor Settings

Settings that are not listed in the table below are self-explanatory.

<table>
    <thead>
        <tr>
            <th>Screenshot</th>
            <th>Setting</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=3><img src="../media/barchart_settings_common.png"></td>
            <td>set datasets with</td>
            <td>The data for the BarChart can be entered via the editor or a JSON string can be used</td>
        </tr>
        <tr>
            <td>number of items</td>
            <td>number of bars using vis editor for the data of list</td>
        </tr>
        <tr>
            <td>Object Id</td>
            <td>object id of datapoint containing json string. Allowed properties are described below</td>
        </tr>
        <tr>
            <td rowspan=><img src="../media/barchart_settings_dataset.png"></td>
            <td>Object ID[x]</td>
            <td>object id for the single bars using vis editor</td>
        </tr>		 
	</tbody>
</table>	

#### Dataset JSON Properties

JSON string must be an array of objects with the following properties:

<table>
	<thead>
		<tr>
			<th>Property</th>
			<th>Description</th>
			<th>Type</th>
			<th>Values</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>label</td>
			<td>axis label of bar</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>value</td>
			<td>bar value</td>
			<td>number</td>
			<td/>
		</tr>
		<tr>
			<td>dataColor</td>
			<td>bar color</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
			<td/>
		</tr>
		<tr>
			<td>valueText</td>
			<td>override text of bar</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>valueColor</td>
			<td>color of value text</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
			<td/>
		</tr>
		<tr>
			<td>valueAppendix</td>
			<td>appendix of value text</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>tooltipTitle</td>
			<td>tooltip title</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>tooltipText</td>
			<td>tooltip text</td>
			<td>string</td>
			<td/>
		</tr>		
	</tbody>
</table>

<!-- omit in toc -->
#### Dataset JSON Properties - Example

<details>
<pre><code>
[
	{
		"label": "val0",
		"value": "30",
		"valueColor": "#ffffff"
	}, {
		"label": "val1",
		"value": "12.54645646",
		"tooltipTitle": "myTitle"
	}, {
		"label": "val2",
		"value": "48",
		"dataColor": "#c2c2c2",
		"valueAppendix": "\n extra"
	}, {
		"label": "val3",
		"value": "97",
		"valueColor": "#ffffff"
	}, {
		"label": "val4",
		"value": "32",
		"valueText": "text"
	}
]
</pre></code>
</details>

### Pie Chart

![Logo](../media/pieChart.png)

#### Editor Settings

Settings that are not listed in the table below are self-explanatory.

<table>
    <thead>
        <tr>
            <th>Screenshot</th>
            <th>Setting</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=3><img src="../media/piechart_settings_common.png"></td>
            <td>set datasets with</td>
            <td>The data for the PieChart can be entered via the editor or a JSON string can be used</td>
        </tr>
        <tr>
            <td>number of items</td>
            <td>number of pies pieces using vis editor for the data of list</td>
        </tr>
        <tr>
            <td>Object Id</td>
            <td>object id of datapoint containing json string. Allowed properties are described below</td>
        </tr>
        <tr>
            <td rowspan=><img src="../media/barchart_settings_dataset.png"></td>
            <td>Object ID[x]</td>
            <td>object id for the single pies pieces using vis editor</td>
        </tr>		 
	</tbody>
</table>

#### Dataset JSON Properties

JSON string must be an array of objects with the following properties:

<table>
	<thead>
		<tr>
			<th>Property</th>
			<th>Description</th>
			<th>Type</th>
			<th>Values</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>label</td>
			<td>axis label of pie</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>value</td>
			<td>pie value</td>
			<td>number</td>
			<td/>
		</tr>
		<tr>
			<td>dataColor</td>
			<td>pie color</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
			<td/>
		</tr>
		<tr>
			<td>valueText</td>
			<td>override text of pie</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>valueColor</td>
			<td>color of value text</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
			<td/>
		</tr>
		<tr>
			<td>valueAppendix</td>
			<td>appendix of value text</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>tooltipTitle</td>
			<td>tooltip title</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>tooltipText</td>
			<td>tooltip text</td>
			<td>string</td>
			<td/>
		</tr>		
	</tbody>
</table>

<!-- omit in toc -->
#### Dataset JSON Properties - Example

<details>
<pre><code>
[
	{
		"label": "val0",
		"value": "30",
		"valueColor": "#ffffff"
	}, {
		"label": "val1",
		"value": "12.54645646"
	}, {
		"label": "val2",
		"value": "48",
		"dataColor": "#c2c2c2",
		"valueAppendix": "\nextra"
	}, {
		"label": "val3",
		"value": "97",
		"valueColor": "#ffffff"
	}, {
		"label": "val4",
		"value": "32",
		"valueText": "text"
	}
]
</pre></code>
</details>


### Line History Chart:

> Required Adapter: [SQL](https://github.com/ioBroker/ioBroker.sql), [History](https://github.com/ioBroker/ioBroker.history) or [InfluxDb](https://github.com/ioBroker/ioBroker.influxdb)!

![Logo](../media/line_history_chart.gif)


#### Editor Settings

Settings that are not listed in the table below are self-explanatory.

<table>
    <thead>
        <tr>
            <th>Screenshot</th>
            <th>Setting</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=5><img src="../media/line_hostory_chart_general.png"></td>
            <td>adapter instance</td>
            <td>Instance for the sql or history adapter</td>
        </tr>
        <tr>
            <td>controlling time interval using object</td>
            <td>Id of a datapoint to change the time interval of the chart.<br><br>If the datapoint is from type 'string' it must contain <a href="https://github.com/Scrounger/ioBroker.vis-materialdesign/blob/235530e4e54346b5527333ca06ce596519954c67/widgets/materialdesign/js/materialdesign.chart.js#L802">one of the linked values</a><br>If the datapoint is from type 'number', it must contain the starting timestamp of the graph.<br><br>For example, you can use a button here to change the display of the chart during runtime</td>
        </tr>
        <tr>
            <td>boolean object for update</td>
            <td>Id of adatapoint to trigger a manual refresh of the chart.<br>For example, you can use a button here to refresh the chart during runtime</td>
        </tr>
        <tr>
            <td>chart timeout</td>
            <td>timeout for loading the chart data. If you get a timeout error message, increase this value</td>
        </tr>
        <tr>
            <td>debug mode</td>
            <td>if you have problems or errors, activate the debug mode and attach the console log (F12) data to the issue</td>
        </tr>
        <tr>
            <td rowspan=5><img src="../media/line_hostory_chart_dataset.png"></td>
            <td>Object Id[x]</td>
            <td>id of datapoint with activated history instance</td>
        </tr>
        <tr>
            <td>display method[x]</td>
            <td><a href="https://www.iobroker.net/docu/index-195.htm?page_id=198&lang=en#Aggregation">aggregation method</a></td>
        </tr>
        <tr>
            <td>max. number of data points to be displayed[x]</td>
            <td>Number of maximum data points to display</td>
        </tr>
        <tr>
            <td>time interval between the data points in [s][x]</td>
            <td>Optional setting, overrides the 'count' setting.<br>Distance between the individual data points in seconds.<br>For example, if you want to display data points every minute, you have to enter 60 here</td>
        </tr>
        <tr>
            <td>data multiply with[x]</td>
            <td>Optional setting, multiply every datapoint with the given value</td>
        </tr>
        <tr>
            <td><img src="../media/line_hostory_chart_xAxis_layout.png"></td>
            <td>time formats of x-axis</td>
            <td>Change the time format of the X-axis. Time formats must be entered for all time units, <a href="https://github.com/Scrounger/ioBroker.vis-materialdesign/blob/c677220868961b3cf0b153fb8bf04e13b4475c09/widgets/materialdesign/js/materialdesign.chart.js#L805">the following time units are permitted.</a><br>Approved time formats must be entered according to the moment.js library, <a href="https://momentjs.com/docs/#/displaying/">see link</a></td>
        </tr>
        <tr>
            <td><img src="../media/line_hostory_chart_tooltip_layout.png"></td>
            <td>tooltip time formats</td>
            <td>Change the time format of the tooltip. Time formats must be entered for all time units, <a href="https://github.com/Scrounger/ioBroker.vis-materialdesign/blob/c677220868961b3cf0b153fb8bf04e13b4475c09/widgets/materialdesign/js/materialdesign.chart.js#L805">the following time units are permitted.</a><br>Approved time formats must be entered according to the moment.js library, <a href="https://momentjs.com/docs/#/displaying/">see link</a></td>
        </tr>
    </tbody>
</table>

### JSON Chart

With the JSON chart you have the maximum freedom to create a mixed chart (line, bars and stacked bars) by script.

![Logo](../media/jsonChart.png) ![Logo](../media/jsonChart2.png)

#### JSON Properties

<!-- omit in toc -->
##### General

<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>axisLabels</td>
            <td>axis label of graph</td>
            <td>Array</td>
            <td>numbers or string</td>
        </tr>
        <tr>
            <td>graphs</td>
            <td>data of graphs</td>
            <td>array<<a href="#graph">graph</a>></td>
            <td>see graph</td>
        </tr>
    </tbody>
</table>

<!-- omit in toc -->
##### graph

<details>
<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>data</td>
            <td>data of graph or data with timestamp</td>
            <td>Array[numbers] | Array[<a href="#values-with-timestamp">values with timestamp</a>]</td>
            <td>number</td>
        </tr>
        <tr>
            <td>type</td>
            <td>type of graph</td>
            <td>string</td>
            <td>'line', 'bar'</td>
        </tr>
        <tr>
            <td>legendText</td>
            <td>text of legend</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>displayOrder</td>
            <td>overlay order of graph</td>
            <td>number</td>
            <td>1, 2, ...</td>
        </tr>
        <tr>
            <td>color</td>
            <td>color of graph</td>
            <td>color</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>use_gradient_color</td>
            <td>use gradient color</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>gradient_color</td>
            <td>gradient color array</td>
            <td>array[<a href="#gradientcolor">gradientColor</a>]</td>
            <td>[ { value: -20, color: '#7d3c98' }, { value: 0, color: '#2874a6' } ]</td>
        </tr>
        <tr>
            <td>tooltip_title</td>
            <td>title of tooltip</td>
            <td>string | array[string]</td>
            <td></td>
        </tr>
        <tr>
            <td>tooltip_text</td>
            <td>ovveride text of tooltip</td>
            <td>string | array[string]</td>
            <td></td>
        </tr>
        <tr>
            <td>tooltip_MinDigits</td>
            <td>max decimals of tooltip value</td>
            <td>number</td>
            <td>0, 1, 2, ...</td>
        </tr>
        <tr>
            <td>tooltip_MaxDigits</td>
            <td>max decimals of tooltip value</td>
            <td>number</td>
            <td>0, 1, 2, ...</td>
        </tr>
        <tr>
            <td>tooltip_AppendText</td>
            <td>append text to tooltip value</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>datalabel_show</td>
            <td>show data labels for graph</td>
            <td>string | boolean</td>
            <td>false, true, auto</td>
        </tr>
        <tr>
            <td>datalabel_anchor</td>
            <td>anchor of data labels</td>
            <td>string</td>
            <td>center, start, end</td>
        </tr>
        <tr>
            <td>datalabel_align</td>
            <td>position of the data label relative to the anchor point</td>
            <td>string</td>
            <td>left, start, center, end, right, top, bottom</td>
        </tr>
        <tr>
            <td>datalabel_offset</td>
            <td>distance (in pixels) to pull the data label away from the anchor point</td>
            <td>number</td>
            <td>0, 1, 2, ...</td>
        </tr>
        <tr>
            <td>datalabel_text_align</td>
            <td>text aligment of the data label</td>
            <td>string</td>
            <td>left, start, center, end, right</td>
        </tr>
        <tr>
            <td>datalabel_rotation</td>
            <td>clockwise rotation angle (in degrees) of the data label</td>
            <td>number</td>
            <td>0, 1, 2, ...</td>
        </tr>
        <tr>
            <td>datalabel_steps</td>
            <td>show data label every x step</td>
            <td>number</td>
            <td>0, 1, 2, ...</td>
        </tr>
        <tr>
            <td>datalabel_minDigits</td>
            <td>minimum decimals of data labels</td>
            <td>number</td>
            <td>0, 1, 2, ...</td>
        </tr>
        <tr>
            <td>datalabel_maxDigits</td>
            <td>maximum decimals of data labels</td>
            <td>number</td>
            <td>0, 1, 2, ...</td>
        </tr>
        <tr>
            <td>datalabel_override</td>
            <td>override text of data label</td>
            <td>array[string]</td>
            <td></td>
        </tr>		
        <tr>
            <td>datalabel_append</td>
            <td>append text to data label</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>datalabel_color</td>
            <td>data label color</td>
            <td>color | array[colors]</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>datalabel_fontFamily</td>
            <td>data label font family</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>datalabel_fontSize</td>
            <td>data label font size</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>datalabel_backgroundColor</td>
            <td>data label background color</td>
            <td>color | array[colors]</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>datalabel_borderColor</td>
            <td>data label border color</td>
            <td>color | array[colors]</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>datalabel_borderWidth</td>
            <td>data label border width</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>datalabel_borderRadius</td>
            <td>data label border radius</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
    </tbody>
</table>
</details>

<!-- omit in toc -->
##### graph line chart spfeicifc

<details>
<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>line_pointStyle</td>
            <td>point style of line</td>
            <td>string</td>
            <td>circle, cross, crossRot, dash, line, rect, rectRounded, rectRot, star, triangle</td>
        </tr>
        <tr>
            <td>line_pointSize</td>
            <td>point size of line</td>
            <td>number</td>
            <td>1, 2, 3, ...</td>
        </tr>
        <tr>
            <td>line_pointSizeHover</td>
            <td>point size of line</td>
            <td>number</td>
            <td>1, 2, 3, ...</td>
        </tr>
        <tr>
            <td>line_PointColor</td>
            <td>color of line point</td>
            <td>color | array[colors]</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>line_PointColorBorder</td>
            <td>border color of line point</td>
            <td>color | array[colors]</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>line_PointColorHover</td>
            <td>hover color of line point</td>
            <td>color | array[colors]</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>line_PointColorBorderHover</td>
            <td>border hover color of line point</td>
            <td>color | array[colors]</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>line_spanGaps</td>
            <td>draw lines if data has gaps</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>line_steppedLine</td>
            <td>enable stepped line</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>line_Tension</td>
            <td>smothness of line</td>
            <td>number</td>
            <td>0 - 1</td>
        </tr>
        <tr>
            <td>line_Thickness</td>
            <td>thikness of line</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>line_UseFillColor</td>
            <td>use fill color under line</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>line_FillColor</td>
            <td>fill color under line</td>
            <td>color</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>use_line_gradient_fill_color</td>
            <td>use gradient fill color</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>line_gradient_fill_color</td>
            <td>gradient color array</td>
            <td>array[<a href="#gradientcolor">gradientColor</a>]</td>
            <td>[ { value: -20, color: '#7d3c98' }, { value: 0, color: '#2874a6' } ]</td>
        </tr>
        <tr>
            <td>line_FillBetweenLines</td>
            <td>fill color to next / previous line</td>
            <td>string</td>
            <td>'+1', '-1', '+2', ...</td>
        </tr>
    </tbody>
</table>
</details>

<!-- omit in toc -->
##### graph bar chart spfeicifc

<details>
<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>barIsStacked</td>
            <td>stacked bar. If you have a comined chart (Line + stacked Bar), then you must also set this value for the line dataset!</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>barStackId</td>
            <td>id of stack. Bar that should combine to a stack must have the same id</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>barColorHover</td>
            <td>hover color of bar</td>
            <td>color | array[colors]</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>barBorderColor</td>
            <td>border color of bar</td>
            <td>color | array[colors]</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>barBorderWidth</td>
            <td>thikness of bar border</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>barBorderColorHover</td>
            <td>border hover color of bar</td>
            <td>color | array[colors]</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>barBorderWidthHover</td>
            <td>hover thikness of bar border</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
    </tbody>
</table>
</details>

<!-- omit in toc -->
##### graph y-Axis

<details>
<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>yAxis_id</td>
            <td>id of y-axis. If you would like to use a common y-axis for multipl graph data, use the same id.</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>yAxis_position</td>
            <td>position of y-axis</td>
            <td>string</td>
            <td>left, right</td>
        </tr>
        <tr>
            <td>yAxis_show</td>
            <td>show y-axis</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>yAxis_title_text</td>
            <td>y-axis title</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>yAxis_title_color</td>
            <td>override y-axis title color</td>
            <td>color</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>yAxis_title_fontFamily</td>
            <td>override y-axis title font family</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>yAxis_title_fontSize</td>
            <td>override y-axis title font size</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>yAxis_min</td>
            <td>minimum value of y-axis</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>yAxis_max</td>
            <td>maximum value of y-axis</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>yAxis_step</td>
            <td>steps of y-axis</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>yAxis_minimumDigits</td>
            <td>y-axis minimum number of decimal places</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>yAxis_maximumDigits</td>
            <td>y-axis maximum number of decimal places</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>yAxis_maxSteps</td>
            <td>maximum steps of y-axis</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>yAxis_distance</td>
            <td>override y-axis value distance to axis</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>yAxis_appendix</td>
            <td>append text to y-axis value</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>yAxis_color</td>
            <td>override y-axis value color</td>
            <td>color</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>yAxis_fontFamily</td>
            <td>override y-axis value font family</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>yAxis_fontSize</td>
            <td>override y-axis value font size</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>yAxis_zeroLineWidth</td>
            <td>width of y-axis zero line</td>
            <td>number</td>
            <td>0.3, 1.5, 4, ...</td>
        </tr>
        <tr>
            <td>yAxis_zeroLineColor</td>
            <td>y-axis zero line color</td>
            <td>color</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>yAxis_gridLines_show</td>
            <td>show y-axis grid lines</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>yAxis_gridLines_color</td>
            <td>color of y-axis grid lines</td>
            <td>color</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>yAxis_gridLines_lineWidth</td>
            <td>width of grid lines</td>
            <td>number</td>
            <td>0 - 1</td>
        </tr>
        <tr>
            <td>yAxis_gridLines_border_show</td>
            <td>show border of y-axis grid lines</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>yAxis_gridLines_ticks_show</td>
            <td>show y-axis grid interval ticks</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>yAxis_gridLines_ticks_length</td>
            <td>length of y-axis grid ticks</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
    </tbody>
</table>
</details>

<!-- omit in toc -->
##### gradientColor

<details>
<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>value</td>
            <td>value where color should be applied</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>color</td>
            <td>color for value</td>
            <td>color</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
    </tbody>
</table>
</details>

<!-- omit in toc -->
##### Chart with time axis
JSON Chart supports data that have a timestamp. To use this the data array must have values for timestamp (x-axis value) and value (y-axis value).

###### values with timestamp

<details>
<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>t</td>
            <td>timestamp - xAxis value</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
        <tr>
            <td>y</td>
            <td>value for timestamp - yAxis value</td>
            <td>number</td>
            <td>1, 2, 5, ...</td>
        </tr>
    </tbody>
</table>
</details>

###### x-axis settings for data with timestamp

<details>
<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>xAxis_bounds</td>
            <td>scale boundary strategy<br><br>'data': makes sure data are fully visible, labels outside are removed<br>'ticks': makes sure ticks are fully visible, data outside are truncated</td>
            <td>String</td>
            <td>data, ticks</td>
        </tr>
        <tr>
            <td>xAxis_timeFormats</td>
            <td>time formats for the x-axis</td>
            <td>Object</td>
            <td>Time formats must be entered for all time units, <a href="https://github.com/Scrounger/ioBroker.vis-materialdesign/blob/c677220868961b3cf0b153fb8bf04e13b4475c09/widgets/materialdesign/js/materialdesign.chart.js#L805">the following time units are permitted.</a><br>Approved time formats must be entered according to the moment.js library, <a href="https://momentjs.com/docs/#/displaying/">see link</a></td>
        </tr>
        <tr>
            <td>xAxis_tooltip_timeFormats</td>
            <td>time formats for the x-axis</td>
            <td>String</td>
            <td>Approved time formats must be entered according to the moment.js library, <a href="https://momentjs.com/docs/#/displaying/">see link</a></td>
        </tr>
        <tr>
            <td>xAxis_time_unit</td>
            <td>force the time format for the x-axis</td>
            <td>String</td>
            <td>following units are allowed, <a href="https://www.chartjs.org/docs/latest/axes/cartesian/time.html#time-units">see link</a></td>
        </tr>
    </tbody>
</table>
</details>

<!-- omit in toc -->
#### Example

<details>
<pre><code>
{
	"axisLabels": ["1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "24h"],
	"graphs": [
		{
			"data": [19, 19, 18, 19, 19, 20, 20, 21, 22, 24, 24, 24, 23, 22, 23, 23, 24, 23, 23, 22, 22, 21, 20, 20],
			"type": "line",
			"color": "gray",
			"legendText": "Temperatur",
			"line_pointSizeHover": 5,
			"line_pointSize": 0,
			"line_Tension": 0.3,
			"yAxis_show": false,
			"yAxis_gridLines_show": false,
			"yAxis_gridLines_ticks_length": 5,
			"yAxis_min": 0,
			"yAxis_max": 30,
			"yAxis_step": 5,
			"yAxis_position": "left",
			"yAxis_appendix": " °C",
			"yAxis_zeroLineWidth": 0.1,
			"yAxis_zeroLineColor": "black",
			"displayOrder": 0,
			"tooltip_AppendText": " °C",
			"datalabel_backgroundColor": ["#2b9a44", "#2b9a44", "#3aa35b", "#2b9a44", "#2b9a44", "#1d922e", "#1d922e", "#0e8917", "#008000", "#668f00", "#668f00", "#668f00", "#338700", "#008000", "#338700", "#338700", "#668f00", "#338700", "#338700", "#008000", "#008000", "#0e8917", "#1d922e", "#1d922e"],
			"datalabel_color": "white",
			"datalabel_offset": -10,
			"datalabel_fontFamily": "RobotoCondensed-Light",
			"datalabel_fontSize": 12,
			"datalabel_borderRadius": 6,
			"datalabel_show": "auto",
			"line_PointColor": ["#2b9a44", "#2b9a44", "#3aa35b", "#2b9a44", "#2b9a44", "#1d922e", "#1d922e", "#0e8917", "#008000", "#668f00", "#668f00", "#668f00", "#338700", "#008000", "#338700", "#338700", "#668f00", "#338700", "#338700", "#008000", "#008000", "#0e8917", "#1d922e", "#1d922e"],
			"line_PointColorBorder": ["#2b9a44", "#2b9a44", "#3aa35b", "#2b9a44", "#2b9a44", "#1d922e", "#1d922e", "#0e8917", "#008000", "#668f00", "#668f00", "#668f00", "#338700", "#008000", "#338700", "#338700", "#668f00", "#338700", "#338700", "#008000", "#008000", "#0e8917", "#1d922e", "#1d922e"],
			"line_PointColorHover": ["#2b9a44", "#2b9a44", "#3aa35b", "#2b9a44", "#2b9a44", "#1d922e", "#1d922e", "#0e8917", "#008000", "#668f00", "#668f00", "#668f00", "#338700", "#008000", "#338700", "#338700", "#668f00", "#338700", "#338700", "#008000", "#008000", "#0e8917", "#1d922e", "#1d922e"],
			"line_PointColorBorderHover": ["#2b9a44", "#2b9a44", "#3aa35b", "#2b9a44", "#2b9a44", "#1d922e", "#1d922e", "#0e8917", "#008000", "#668f00", "#668f00", "#668f00", "#338700", "#008000", "#338700", "#338700", "#668f00", "#338700", "#338700", "#008000", "#008000", "#0e8917", "#1d922e", "#1d922e"],
			"use_gradient_color": true,
			"gradient_color": [{
					"value": -20,
					"color": "#5b2c6f66"
				}, {
					"value": 0,
					"color": "#2874a666"
				}, {
					"value": 14,
					"color": "#73c6b666"
				}, {
					"value": 22,
					"color": "#00800066"
				}, {
					"value": 27,
					"color": "#ffa50066"
				}, {
					"value": 35,
					"color": "#ff000066"
				}
			],
			"use_line_gradient_fill_color": true,
			"line_gradient_fill_color": [{
					"value": -20,
					"color": "#5b2c6f66"
				}, {
					"value": 0,
					"color": "#2874a666"
				}, {
					"value": 14,
					"color": "#73c6b666"
				}, {
					"value": 22,
					"color": "#00800066"
				}, {
					"value": 27,
					"color": "#ffa50066"
				}, {
					"value": 35,
					"color": "#ff000066"
				}
			]
		}, {
			"data": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 19, 33, 36, 23, 14, 16, 34, 46, 40, 24, 22],
			"type": "line",
			"color": "#0d47a1",
			"legendText": "Regenwahrscheinlichkeit",
			"line_UseFillColor": true,
			"line_pointSize": 0,
			"line_pointSizeHover": 5,
			"yAxis_min": 0,
			"yAxis_max": 100,
			"yAxis_maxSteps": 10,
			"yAxis_position": "left",
			"yAxis_gridLines_show": false,
			"yAxis_gridLines_border_show": false,
			"yAxis_zeroLineWidth": 0.1,
			"yAxis_zeroLineColor": "black",
			"yAxis_appendix": " %",
			"displayOrder": 1,
			"tooltip_AppendText": " %",
			"datalabel_show": false
		}, {
			"data": ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1.3", "2.5", 0, 1.9, 1.17, 0, 0, 0, 0.18, 0.7, 0.2, 0, 0],
			"type": "bar",
			"color": "#6dd600",
			"legendText": "Niederschlag",
			"yAxis_min": 0,
			"yAxis_max": 5,
			"yAxis_maxSteps": 10,
			"yAxis_position": "right",
			"yAxis_gridLines_show": false,
			"yAxis_appendix": " mm",
			"yAxis_gridLines_border_show": false,
			"yAxis_zeroLineWidth": 0.1,
			"yAxis_zeroLineColor": "black",
			"displayOrder": 1,
			"tooltip_AppendText": " mm",
			"datalabel_show": false
		}
	]
}
  
</pre></code>
</details>

<details>
<pre><code>
{
	"axisLabels": ["Jan", "Feb", "Mrz", "Apr"],
	"graphs": [{
			"type": "line",
			"data": [40, 22, 160, 92],
			"yAxis_id": 0,
			"barIsStacked": true,
			"datalabel_show": false,
			"line_UseFillColor": true

		}, {
			"type": "bar",
			"barIsStacked": true,
			"data": [30, 69, 91, 35],
			"yAxis_id": 0,
			"barStackId": 0,
			"color": "#6dd600",
			"datalabel_color": "#FFFFFF",
			"datalabel_align": "start",
			"use_gradient_color": true,
			"gradient_color": [{
					"value": 60,
					"color": "#6dd600"
				}, {
					"value": 0,
					"color": "lightgray"
				}
			]
		}, {
			"type": "bar",
			"barIsStacked": true,
			"data": [17, 68, 83, 49],
			"yAxis_id": 0,
			"barStackId": 1,
			"color": "#ff9800",
			"datalabel_color": "#FFFFFF",
			"datalabel_align": "start"
		}, {
			"type": "bar",
			"barIsStacked": true,
			"data": [95, 42, 34, 31],
			"yAxis_id": 0,
			"barStackId": 1,
			"color": "#8e24aa",
			"datalabel_color": "#FFFFFF",
			"datalabel_align": "start"
		}, {
			"type": "bar",
			"barIsStacked": true,
			"data": [33, 44, 22, 34],
			"yAxis_id": 0,
			"barStackId": 2,
			"color": "#a65628",
			"datalabel_color": "#FFFFFF",
			"datalabel_align": "start"
		}, {
			"type": "bar",
			"barIsStacked": true,
			"data": [28, 34, 45, 23],
			"yAxis_id": 0,
			"yAxis_max": "180",
			"barStackId": 2,
			"color": "#d32f2f",
			"datalabel_color": "#FFFFFF",
			"datalabel_align": "start"
		}
	]
}
  
</pre></code>
</details>
