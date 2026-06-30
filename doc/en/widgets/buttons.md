# Buttons

[Back to README](../../../README.md#widget-documentation)

![Logo](../media/buttons_default.gif)

### Navigation

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
            <td rowspan=1><img src="../media/button_navigation_common.png"></td>
            <td>View to navigate</td>
			<td>name of view to navigate</td>
        </tr>	
    </tbody>
</table>

#### HTML Properties

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
			<td>mdw-type</td>
			<td>Widget type</td>
			<td>string</td>
			<td>navigation_default</td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Common</b></i></td>
		</tr>
		<tr>
			<td>mdw-buttonStyle</td>
			<td>button style</td>
			<td>string</td>
			<td>text | raised | unelevated | outlined
		</tr>
		<tr>
			<td>mdw-nav_view</td>
			<td>View to navigate</td>
			<td>views</td>
			<td>
		</tr>
		<tr>
			<td>mdw-vibrateOnMobilDevices</td>
			<td>vibrate on mobil devices [s]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-debug</td>
			<td>debug</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>labeling</b></i></td>
		</tr>
		<tr>
			<td>mdw-buttontext</td>
			<td>Button text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textFontSize</td>
			<td>text size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-labelWidth</td>
			<td>text width</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>colors</b></i></td>
		</tr>
		<tr>
			<td>mdw-mdwButtonPrimaryColor</td>
			<td>primary color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-mdwButtonSecondaryColor</td>
			<td>secondary color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-mdwButtonColorPress</td>
			<td>color pressed</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
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
	</tbody>
</table>

<!-- omit in toc -->
##### HTML Properties - Example

<details>

```
<div class='vis-widget materialdesign-widget materialdesign-button materialdesign-button-html-element'
	style='width: 100%; height: 100%; position: relative; padding: 0px;'
	mdw-type='navigation_default'
	mdw-buttonStyle='raised'
	mdw-nav_view='value'
	mdw-vibrateOnMobilDevices='50'
	mdw-buttontext=' Navigation'
	mdw-textFontFamily='#mdwTheme:vis-materialdesign.0.fonts.button.default.text'
	mdw-textFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.button.default.text'
	mdw-mdwButtonPrimaryColor='#mdwTheme:vis-materialdesign.0.colors.button.default.primary'
	mdw-mdwButtonSecondaryColor='#mdwTheme:vis-materialdesign.0.colors.button.default.secondary'
	mdw-image='navigation'
	mdw-iconPosition='left'
></div>
```

</details>

### Link

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
            <td rowspan=2><img src="../media/button_link_common.png"></td>
            <td>Link</td>
			<td>url to open</td>
        </tr>
        <tr>
            <td>open in new window</td>
			<td>open link in new window / tab</td>
        </tr>			
    </tbody>
</table>

#### HTML Properties

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
			<td>mdw-type</td>
			<td>Widget type</td>
			<td>string</td>
			<td>link_default</td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Common</b></i></td>
		</tr>
		<tr>
			<td>mdw-buttonStyle</td>
			<td>button style</td>
			<td>string</td>
			<td>text | raised | unelevated | outlined
		</tr>
		<tr>
			<td>mdw-href</td>
			<td>Link</td>
			<td>url</td>
			<td>
		</tr>
		<tr>
			<td>mdw-openNewWindow</td>
			<td>open in new window</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-vibrateOnMobilDevices</td>
			<td>vibrate on mobil devices [s]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-debug</td>
			<td>debug</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>labeling</b></i></td>
		</tr>
		<tr>
			<td>mdw-buttontext</td>
			<td>Button text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textFontSize</td>
			<td>text size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-labelWidth</td>
			<td>text width</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>colors</b></i></td>
		</tr>
		<tr>
			<td>mdw-mdwButtonPrimaryColor</td>
			<td>primary color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-mdwButtonSecondaryColor</td>
			<td>secondary color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-mdwButtonColorPress</td>
			<td>color pressed</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
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
	</tbody>
</table>

<!-- omit in toc -->
##### HTML Properties - Example

<details>

```
<div class='vis-widget materialdesign-widget materialdesign-button materialdesign-button-html-element'
	style='width: 100px; height: 30px; position: relative; padding: 0px;'
	mdw-type='link_default'
	mdw-buttonStyle='raised'
	mdw-href='https://github.com/Scrounger/ioBroker.vis-materialdesign'
	mdw-openNewWindow='true'
	mdw-vibrateOnMobilDevices='50'
	mdw-buttontext=' Link'
	mdw-textFontFamily='#mdwTheme:vis-materialdesign.0.fonts.button.default.text'
	mdw-textFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.button.default.text'
	mdw-mdwButtonPrimaryColor='#mdwTheme:vis-materialdesign.0.colors.button.default.primary'
	mdw-mdwButtonSecondaryColor='#mdwTheme:vis-materialdesign.0.colors.button.default.secondary'
	mdw-image='link'
	mdw-iconPosition='left'
></div>
```

</details>

### State

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
            <td rowspan=1><img src="../media/button_state_common.png"></td>
            <td>value</td>
			<td>value to set</td>
        </tr>		
    </tbody>
</table>

#### HTML Properties

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
			<td>mdw-type</td>
			<td>Widget type</td>
			<td>string</td>
			<td>state_default</td>
		</tr>
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
			<td>mdw-buttonStyle</td>
			<td>button style</td>
			<td>string</td>
			<td>text | raised | unelevated | outlined
		</tr>
		<tr>
			<td>mdw-value</td>
			<td>value</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-vibrateOnMobilDevices</td>
			<td>vibrate on mobil devices [s]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-debug</td>
			<td>debug</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>labeling</b></i></td>
		</tr>
		<tr>
			<td>mdw-buttontext</td>
			<td>Button text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textFontSize</td>
			<td>text size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-labelWidth</td>
			<td>text width</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>colors</b></i></td>
		</tr>
		<tr>
			<td>mdw-mdwButtonPrimaryColor</td>
			<td>primary color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-mdwButtonSecondaryColor</td>
			<td>secondary color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-mdwButtonColorPress</td>
			<td>color pressed</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
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
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Locking</b></i></td>
		</tr>
		<tr>
			<td>mdw-lockEnabled</td>
			<td>enable Locking</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-autoLockAfter</td>
			<td>auto Locking after [s]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIcon</td>
			<td>icon</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIconSize</td>
			<td>icon size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIconColor</td>
			<td>icon color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-lockFilterGrayscale</td>
			<td>gray filter if locked</td>
			<td>number</td>
			<td>
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
##### HTML Properties - Example

<details>

```
<div class='vis-widget materialdesign-widget materialdesign-button materialdesign-button-html-element'
	style='width: 100%; height: 100%; position: relative; padding: 0px;'
	mdw-type='state_default'
	mdw-oid='0_userdata.0.number'
	mdw-buttonStyle='raised'
	mdw-value='22'
	mdw-vibrateOnMobilDevices='50'
	mdw-buttontext=' State'
	mdw-textFontFamily='#mdwTheme:vis-materialdesign.0.fonts.button.default.text'
	mdw-textFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.button.default.text'
	mdw-mdwButtonPrimaryColor='#mdwTheme:vis-materialdesign.0.colors.button.default.primary'
	mdw-mdwButtonSecondaryColor='#mdwTheme:vis-materialdesign.0.colors.button.default.secondary'
	mdw-image='pencil'
	mdw-iconPosition='left'
	mdw-autoLockAfter='10'
	mdw-lockIconColor='#mdwTheme:vis-materialdesign.0.colors.button.lock_icon'
	mdw-lockFilterGrayscale='30'
></div>
```

</details>

### Multi State

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
            <td rowspan=3></td>
            <td>Object ID[x]</td>
			<td>id of the object from which the value is to be set</td>
        </tr>
        <tr>
            <td>value[x]</td>
			<td>value to be set</td>
        </tr>
        <tr>
            <td>delay [ms][x]</td>
			<td>delay until value is set</td>
        </tr>						
    </tbody>
</table>

#### HTML Properties

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
			<td>mdw-type</td>
			<td>Widget type</td>
			<td>string</td>
			<td>multiState_default</td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Common</b></i></td>
		</tr>
		<tr>
			<td>mdw-countOids</td>
			<td>count of Object Id's</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-buttonStyle</td>
			<td>button style</td>
			<td>string</td>
			<td>text | raised | unelevated | outlined
		</tr>
		<tr>
			<td>mdw-vibrateOnMobilDevices</td>
			<td>vibrate on mobil devices [s]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-debug</td>
			<td>debug</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Object Id [x]</b></i></td>
		</tr>
		<tr>
			<td>mdw-oid[x]</td>
			<td>Object ID</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-value[x]</td>
			<td>value</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-delayInMs[x]</td>
			<td>delay [ms]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>labeling</b></i></td>
		</tr>
		<tr>
			<td>mdw-buttontext</td>
			<td>Button text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textFontSize</td>
			<td>text size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-labelWidth</td>
			<td>text width</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>colors</b></i></td>
		</tr>
		<tr>
			<td>mdw-mdwButtonPrimaryColor</td>
			<td>primary color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-mdwButtonSecondaryColor</td>
			<td>secondary color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-mdwButtonColorPress</td>
			<td>color pressed</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
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
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Locking</b></i></td>
		</tr>
		<tr>
			<td>mdw-lockEnabled</td>
			<td>enable Locking</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-autoLockAfter</td>
			<td>auto Locking after [s]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIcon</td>
			<td>icon</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIconSize</td>
			<td>icon size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIconColor</td>
			<td>icon color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-lockFilterGrayscale</td>
			<td>gray filter if locked</td>
			<td>number</td>
			<td>
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
##### HTML Properties - Example

<details>

```
<div class='vis-widget materialdesign-widget materialdesign-button materialdesign-button-html-element'
	style='width: 100%; height: 100%; position: relative; padding: 0px;'
	mdw-type='multiState_default'
	mdw-countOids='1'
	mdw-buttonStyle='raised'
	mdw-vibrateOnMobilDevices='50'
	mdw-buttontext=' Multi State'
	mdw-textFontFamily='#mdwTheme:vis-materialdesign.0.fonts.button.default.text'
	mdw-textFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.button.default.text'
	mdw-mdwButtonPrimaryColor='#mdwTheme:vis-materialdesign.0.colors.button.default.primary'
	mdw-mdwButtonSecondaryColor='#mdwTheme:vis-materialdesign.0.colors.button.default.secondary'
	mdw-image='pencil-box-multiple'
	mdw-iconPosition='left'
	mdw-autoLockAfter='10'
	mdw-lockIconColor='#mdwTheme:vis-materialdesign.0.colors.button.lock_icon'
	mdw-lockFilterGrayscale='30'
	mdw-oid0='0_userdata.0.MDW.Buttons.multiState.bool'
	mdw-value0='true'
	mdw-delayInMs0='0'
	mdw-oid1='0_userdata.0.MDW.Buttons.number'
	mdw-value1='66'
	mdw-delayInMs1='0'
></div>
```

</details>

### Addition

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
            <td rowspan=2><img src="../media/button_addition_common.png"></td>
            <td>value</td>
			<td>value to be added or subtracted</td>
        </tr>
        <tr>
            <td>minmax</td>
			<td>minimum / maximum value up to which adding or subtracting can take place</td>
        </tr>		
    </tbody>
</table>

#### HTML Properties

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
			<td>mdw-type</td>
			<td>Widget type</td>
			<td>string</td>
			<td>addition_default</td>
		</tr>
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
			<td>mdw-buttonStyle</td>
			<td>button style</td>
			<td>string</td>
			<td>text | raised | unelevated | outlined
		</tr>
		<tr>
			<td>mdw-value</td>
			<td>value</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-minmax</td>
			<td>minmax</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-vibrateOnMobilDevices</td>
			<td>vibrate on mobil devices [s]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-debug</td>
			<td>debug</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>labeling</b></i></td>
		</tr>
		<tr>
			<td>mdw-buttontext</td>
			<td>Button text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textFontSize</td>
			<td>text size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-labelWidth</td>
			<td>text width</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>colors</b></i></td>
		</tr>
		<tr>
			<td>mdw-mdwButtonPrimaryColor</td>
			<td>primary color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-mdwButtonSecondaryColor</td>
			<td>secondary color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-mdwButtonColorPress</td>
			<td>color pressed</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
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
	</tbody>
</table>

<!-- omit in toc -->
##### HTML Properties - Example

<details>

```
<div class='vis-widget materialdesign-widget materialdesign-button materialdesign-button-html-element'
	style='width: 100%; height: 100%; position: relative; padding: 0px;'
	mdw-type='addition_default'
	mdw-oid='0_userdata.0.MDW.Buttons.number'
	mdw-buttonStyle='raised'
	mdw-value='1'
	mdw-minmax='100'
	mdw-vibrateOnMobilDevices='50'
	mdw-buttontext=' Addition'
	mdw-textFontFamily='#mdwTheme:vis-materialdesign.0.fonts.button.default.text'
	mdw-textFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.button.default.text'
	mdw-mdwButtonPrimaryColor='#mdwTheme:vis-materialdesign.0.colors.button.default.primary'
	mdw-mdwButtonSecondaryColor='#mdwTheme:vis-materialdesign.0.colors.button.default.secondary'
	mdw-image='plus'
	mdw-iconPosition='left'
></div>
```

</details>

### Toggle

#### Editor Settings

Settings that are not listed in the table below are self-explanatory.

tbd

#### HTML Properties

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
			<td>mdw-type</td>
			<td>Widget type</td>
			<td>string</td>
			<td>toggle_default</td>
		</tr>
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
			<td>mdw-buttonStyle</td>
			<td>button style</td>
			<td>string</td>
			<td>text | raised | unelevated | outlined
		</tr>
		<tr>
			<td>mdw-readOnly</td>
			<td>read only</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-toggleType</td>
			<td>type of toggle</td>
			<td>string</td>
			<td>boolean | value
		</tr>
		<tr>
			<td>mdw-pushButton</td>
			<td>push button</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-valueOff</td>
			<td>value for off</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueOn</td>
			<td>value for on</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-stateIfNotTrueValue</td>
			<td>state if value unequal to 'on' condition</td>
			<td>string</td>
			<td>on | off
		</tr>
		<tr>
			<td>mdw-vibrateOnMobilDevices</td>
			<td>vibrate on mobil devices [s]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-debug</td>
			<td>debug</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>labeling</b></i></td>
		</tr>
		<tr>
			<td>mdw-buttontext</td>
			<td>Button text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-labelTrue</td>
			<td>Label true</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-labelColorFalse</td>
			<td>label color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-labelColorTrue</td>
			<td>active label color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-textFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textFontSize</td>
			<td>text size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-labelWidth</td>
			<td>text width</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>colors</b></i></td>
		</tr>
		<tr>
			<td>mdw-mdwButtonPrimaryColor</td>
			<td>primary color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-mdwButtonSecondaryColor</td>
			<td>secondary color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-mdwButtonColorPress</td>
			<td>color pressed</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-colorBgFalse</td>
			<td>background</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-colorBgTrue</td>
			<td>active background</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
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
			<td>mdw-imageTrue</td>
			<td>active image</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-imageTrueColor</td>
			<td>active image color</td>
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
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Locking</b></i></td>
		</tr>
		<tr>
			<td>mdw-lockEnabled</td>
			<td>enable Locking</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-autoLockAfter</td>
			<td>auto Locking after [s]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIcon</td>
			<td>icon</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIconSize</td>
			<td>icon size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIconColor</td>
			<td>icon color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-lockFilterGrayscale</td>
			<td>gray filter if locked</td>
			<td>number</td>
			<td>
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
##### HTML Properties - Example

<details>

```
<div class='vis-widget materialdesign-widget materialdesign-button materialdesign-button-html-element'
	style='width: 100%; height: 100%; position: relative; padding: 0px;'
	mdw-type='toggle_default'
	mdw-oid='0_userdata.0.MDW.Buttons.multiState.bool'
	mdw-buttonStyle='raised'
	mdw-toggleType='boolean'
	mdw-stateIfNotTrueValue='on'
	mdw-vibrateOnMobilDevices='50'
	mdw-buttontext='off'
	mdw-labelTrue='on'
	mdw-textFontFamily='#mdwTheme:vis-materialdesign.0.fonts.button.default.text'
	mdw-textFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.button.default.text'
	mdw-mdwButtonPrimaryColor='#mdwTheme:vis-materialdesign.0.colors.button.default.primary'
	mdw-mdwButtonSecondaryColor='#mdwTheme:vis-materialdesign.0.colors.button.default.secondary'
	mdw-colorBgTrue='green'
	mdw-image='checkbox-blank-outline'
	mdw-imageTrue='checkbox-marked'
	mdw-iconPosition='left'
	mdw-autoLockAfter='4'
	mdw-lockIconColor='#mdwTheme:vis-materialdesign.0.colors.button.lock_icon'
	mdw-lockFilterGrayscale='30'
></div>
```

</details>
