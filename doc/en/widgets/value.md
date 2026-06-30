# Value

[Back to README](../../../README.md#widget-documentation)

![Logo](../media/value.gif)

As HTML Widget it can be used as an alternativ for Bindings by giving a better performance.

### Editor Settings 

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
            <td rowspan=2><img src="../media/value_settings_common.png"></td>
            <td>target type</td>
            <td>If you would like to convert to an other type, choose the target type to convert to.</td>
        </tr>
        <tr>
            <td>override text</td>
            <td>override the value text. you can use <code>#value</code> to show the value in the text</td>
        </tr>
        <tr>
            <td rowspan=3><img src="../media/value_settings_layout.png"></td>
            <td>font color</td>
            <td>Define the color of the text. Additional it's posible to use <code>#value</code> for conditions to show diffrent colors depending on the value of the datapoint. Allowed expression see <a href="https://mathjs.org/docs/expressions/syntax.html#operators" _target="blank">mathjs evaluation expressions</a></td>
        </tr>
        <tr>
            <td>color of the text prepanded</td>
            <td>Define the color of the text. Additional it's posible to use <code>#value</code> for conditions to show diffrent colors depending on the value of the datapoint. Allowed expression see <a href="https://mathjs.org/docs/expressions/syntax.html#operators" _target="blank">mathjs evaluation expressions</a></td>
        </tr>
        <tr>
            <td>color of appended text</td>
            <td>Define the color of the text. Additional it's posible to use <code>#value</code> for conditions to show diffrent colors depending on the value of the datapoint. Allowed expression see <a href="https://mathjs.org/docs/expressions/syntax.html#operators" _target="blank">mathjs evaluation expressions</a></td>
        </tr>								
        <tr>
            <td rowspan=3><img src="../media/value_settings_number_formatting.png"></td>
            <td>calculate</td>
            <td>Use <code>#value</code> for the value of the datapoint and convert it by calculation using <a href="https://mathjs.org/docs/expressions/syntax.html#operators" _target="blank">mathjs evaluation expressions</a></td>
        </tr>
        <tr>
            <td>convert seconds to duration</td>
            <td>convert a duration in seconds to a readable string. Approved formats must be entered according to the <a href="https://github.com/jsmreese/moment-duration-format#template-string">moment-duration-format</a> library. You can also use <code>humanize</code>.<br><br>
			It's also possible to combine this with the calculation, e.g. if the source value is in minutes, you can convert it to seconds by using calculation</td>
        </tr>
        <tr>
            <td>convert timestamp to datetime</td>
            <td>convert a timestamp to a readable datetime. Approved formats must be entered according to the <a href="https://momentjs.com/docs/#/displaying/format/">momentjs</a> library.<br><br>
			It's also possible to combine this with the calculation</td>
        </tr>		
        <tr>
            <td rowspan=1><img src="../media/value_settings_boolean_formatting.png"></td>
            <td>condition</td>
            <td>Use <code>#value</code> for the value of the datapoint and conditions to format other types to boolean by using the <a href="https://mathjs.org/docs/expressions/syntax.html#operators" _target="blank">mathjs evaluation expressions</a></td>
        </tr>
        <tr>
            <td rowspan=2><img src="../media/value_settings_image.png"></td>
            <td>Image</td>
            <td>Select a materialdesignicon or an image. Additional it's posible to use <code>#value</code> for conditions to show diffrent images / icons depending on the value of the datapoint. Allowed expression see <a href="https://mathjs.org/docs/expressions/syntax.html#operators" _target="blank">mathjs evaluation expressions</a></td>
        </tr>
        <tr>
            <td>image color</td>
            <td>Define the color of the materialdesignicon. Additional it's posible to use <code>#value</code> for conditions to show diffrent colors depending on the value of the datapoint. Allowed expression see <a href="https://mathjs.org/docs/expressions/syntax.html#operators" _target="blank">mathjs evaluation expressions</a></td>
        </tr>					
    </tbody>
</table>


### HTML Properties

The following properties can be used as [HTML Widgets](html-widgets.md).

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
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Common</b></i></td>
		</tr>
		<tr>
			<td>mdw-oid</td>
			<td>Object ID</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-targetType</td>
			<td>target type</td>
			<td>string</td>
			<td>auto | number | string | boolean
		</tr>
		<tr>
			<td>mdw-overrideText</td>
			<td>override text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-debug</td>
			<td>debug</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>layout</b></i></td>
		</tr>
		<tr>
			<td>mdw-textAlign</td>
			<td>textAlign</td>
			<td>string</td>
			<td>start | center | end
		</tr>
		<tr>
			<td>mdw-valuesFontColor</td>
			<td>font color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-valuesFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valuesFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandText</td>
			<td>text prepanded</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandTextColor</td>
			<td>color of text prepanded</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-prepandTextFontFamily</td>
			<td>font of text prepanded</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandTextFontSize</td>
			<td>size text prepanded</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-appendText</td>
			<td>appended text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-appendTextColor</td>
			<td>color of appended text</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-appendTextFontFamily</td>
			<td>font of appended text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-appendTextFontSize</td>
			<td>font size of appended text</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>number formatting</b></i></td>
		</tr>
		<tr>
			<td>mdw-valueLabelUnit</td>
			<td>unit</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-minDecimals</td>
			<td>minimal decimals</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-maxDecimals</td>
			<td>maximal decimals</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-calculate</td>
			<td>calculate</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-convertToDuration</td>
			<td>convert to duration</td>
			<td>text</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>boolean formatting</b></i></td>
		</tr>
		<tr>
			<td>mdw-textOnTrue</td>
			<td>text if true</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textOnFalse</td>
			<td>text if false</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-condition</td>
			<td>condition</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>icon</b></i></td>
		</tr>
		<tr>
			<td>mdw-image</td>
			<td>Image</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-imageColor</td>
			<td>image color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-iconPosition</td>
			<td>image position</td>
			<td>string</td>
			<td>left | right
		</tr>
		<tr>
			<td>mdw-iconHeight</td>
			<td>image height</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>value change effect</b></i></td>
		</tr>
		<tr>
			<td>mdw-changeEffectEnabled</td>
			<td>enabled</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-effectFontColor</td>
			<td>font color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-effectFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-effectDuration</td>
			<td>effect duration</td>
			<td>number</td>
			<td>
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
#### HTML Properties - Example

<details>

```
<div class='vis-widget materialdesign-widget materialdesign-value materialdesign-value-html-element'
	style='width: 218px; height: 30px; position: relative; display: flex; align-items: center;'
	mdw-debug='false'
	mdw-oid='0_userdata.0.MDW.Value.number'
	mdw-targetType='auto'
	mdw-textAlign='start'
	mdw-valuesFontColor='#mdwTheme:vis-materialdesign.0.colors.value.text'
	mdw-valuesFontFamily='#mdwTheme:vis-materialdesign.0.fonts.value.text'
	mdw-valuesFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.value.text'
	mdw-prepandText='aktuelle Leistung:'
	mdw-prepandTextColor='#mdwTheme:vis-materialdesign.0.colors.value.prepand'
	mdw-prepandTextFontFamily='#mdwTheme:vis-materialdesign.0.fonts.value.prepand'
	mdw-prepandTextFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.value.prepand'
	mdw-appendTextColor='#mdwTheme:vis-materialdesign.0.colors.value.append'
	mdw-appendTextFontFamily='#mdwTheme:vis-materialdesign.0.fonts.value.append'
	mdw-appendTextFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.value.append'
	mdw-valueLabelUnit='W'
	mdw-image='power-plug'
	mdw-imageColor='#mdwTheme:vis-materialdesign.0.colors.value.icon'
	mdw-iconPosition='left'
	mdw-changeEffectEnabled='true'
	mdw-effectFontColor='#00e640'
	mdw-effectFontSize='20'
	mdw-effectDuration='1000'
></div>
```

</details>
