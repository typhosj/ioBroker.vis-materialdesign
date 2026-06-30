# Top App Bar

[Back to README](../../../README.md#widget-documentation)

Top App Bar with Navigation Drawer can be combined with the <a href="https://www.iobroker.net/#en/documentation/viz/basic.md" target="_blank">view in widget 8</a>.

<b>Take a look at the [Material Design Widgets example project](https://github.com/Scrounger/ioBroker.vis-materialdesign#online-example-project)</b> to understand how it works.

##### Layout modal:
![Logo](../media/topappbar_modal.gif)

##### Layout permanent:
![Logo](../media/topappbar_permanent.gif)

##### Layout auto:
![Logo](../media/topappbar_auto.gif)

Layout 'auto' switch automatically between layout 'modal' and 'permanent' depending on screen resolution. Via VIS-Editor you can set the resolution from which the 'permanent' layout should be used (bigger than condition).

**Hint: Using with the 'View in Widget 8' widget**

To work correct with the 'view in widget 8' widget you have to define a css media rule.

* First assign a "Common CSS Rule" to the widget , e.g. named `my-view-in-widget8`.
* Then add the following CSS to your project:
```
.my-view-in-widget8 {
    top: 64px !important;
    height: calc(100% - 64px) !important;
    overflow-y: auto;
}
@media screen and (max-width: 800px) {
    /* Resolution lower than 800px -> using 'modal' layout */
    .my-view-in-widget8 {
        left: 0 !important;
        width: 100% !important;
    }
}
@media screen and (min-width: 800px) {
    /* Resolution higher than 800px -> using 'modal' layout */
    .my-view-in-widget8 {
        left: 256px !important;
        width: calc(100% - 256px) !important;
    }
}
```
* In the CSS customize the resolution to the resolution that you set via VIS Editor (in the example `max-width: 800px` and `min-width: 800px`)
* If you set a custom width for the menu drawer, than you also have to change 'left' and 'width' property in the CSS to this value (in the example `left: 256px !important;` and `width: calc(100% - 256px) !important;`)

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
            <td rowspan=6><img src="../media/topappbar_common.png"></td>
            <td>Object ID</td>
            <td>must be set to a datapoint from typ number. For example this datapoint can be used by <a href="https://www.iobroker.net/#en/documentation/viz/basic.md" target="_blank">view in widget 8</a></td>
        </tr>
        <tr>
            <td>show index of navigation items</td>
            <td>shows the index of navigation before the item label. This number can be used in <a href="https://www.iobroker.net/#en/documentation/viz/basic.md" target="_blank">view in widget 8</a> to define the view that should be shown if the item is selected</td>
        </tr>
        <tr>
            <td>count of navigation items</td>
            <td>Define the count of the navigations items</td>
        </tr>
        <tr>
            <td>fallback value if not in user group</td>
            <td>if you use the group permissions, you can define here the value to switch to if the user is not in the group</td>
        </tr>
        <tr>
            <td>disable fallback value</td>
            <td>disable fallback value</td>
        </tr>
        <tr>
            <td>Object Id for selected menu item id or name</td>
            <td>You can optionally specify a datapoint in which the name or the menu id of the selected navigation element is written.<br>If no menu id is specified, the text of the navigation element is used. If the selected navigation element is a submenu, the name or menu id of the corresponding navigation element and submenu element is written separated with a '.', e.g. <code>EG.Wohnzimmer</code><br><br>For example, this can be used to dynamically create widgets depending on the selected navigation element.</td>
        </tr>		
        <tr>
            <td rowspan=2><img src="../media/topappbar_data.png"></td>
            <td>input method for the navigation items</td>
            <td>Choose if the navigation elements are created by VIS editor or by json string.</td>
        </tr>
        <tr>
            <td>JSON String for navigation items</td>
            <td><a href="#menu-json-properties-2">details see Menu JSON Properties and Submenu JSON Properties</a></td>
        </tr>		
    </tbody>
</table>

### Menu JSON Properties

menu items can be defined by a JSON string:

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
            <td>menuId</td>
            <td>define a custom id for menu item, will be written to the "Object Id for selected menu item id or name" if selected</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>text</td>
            <td>text of menu item</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>header</td>
            <td>header of menu item</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>icon</td>
            <td>icon or image path of entry</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>iconColor</td>
            <td>icon color (works not if image is used)</td>
            <td>color</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>divider</td>
            <td>show a divider</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>userGroups</td>
            <td>user groups that are allowed to view and control this entry.</td>
            <td>array[string]</td>
            <td>id of user groups</td>
        </tr>
        <tr>
            <td>behaviorNotInUserGroup</td>
            <td>hide or disable entry if user is not part of user group</td>
            <td>string</td>
            <td>hide, disabled</td>
        </tr>
        <tr>
            <td>setValueOnMenuToggleClick</td>
            <td>set value on click at item that toggle submenu</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>subMenuIconColor</td>
            <td>icon color of sub menu items (works not if image is used)</td>
            <td>color</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>subMenus</td>
            <td>Object with sub menu items, <a href="#submenu-json-properties">Details see Submenu JSON Properties</a></td>
            <td>array[subMenu]</td>
            <td></td>
        </tr>		
    </tbody>
</table>

<!-- omit in toc -->
#### Menu JSON Properties - Example

<details>
<pre><code>
[
	{
		"text": "Start",
		"divider": "true",
		"icon": "home"
	}, {
		"menuId": "EG",
		"text": "Erdgeschoss",
		"icon": "home-floor-0",
		"setValueOnMenuToggleClick": "true",
		"subMenus": [
			{
				"menuId": "Esszimmer",
				"text": "Esszimmer",
				"icon": "table-furniture"
			}, {
				"menuId": "Wohnzimmer",
				"text": "Wohnzimmer",
				"icon": "sofa"
			}, {
				"menuId": "Kueche",
				"text": "Küche",
				"icon": "sofa"
			}, {
				"menuId": "Eingang",
				"text": "Eingang",
				"icon": "sofa"
			}, {
				"menuId": "Flur",
				"text": "Flur",
				"icon": "sofa"
			}, {
				"menuId": "Bad",
				"text": "Bad",
				"icon": "sofa"
			}, {
				"menuId": "Zimmer",
				"text": "Zimmer",
				"icon": "sofa"
			}
		]
	}, {
		"menuId": "DG",
		"text": "Dachgeschoss",
		"icon": "home-roof",
		"setValueOnMenuToggleClick": "true",
		"subMenus": [
			{
				"text": "Flur",
				"icon": "table-furniture"
			}, {
				"text": "Galerie",
				"icon": "sofa"
			}, {
				"text": "Schlafzimmer",
				"icon": "sofa"
			}, {
				"text": "Ankleide",
				"icon": "sofa"
			}, {
				"text": "Bad",
				"icon": "sofa"
			}, {
				"text": "Kinderzimmer",
				"icon": "sofa"
			}
		]
	}
]
</code></pre>
</details>

### Submenu 
![Logo](../media/drawer_subMenu.png)

submenus must be defined by a JSON string:

#### Submenu JSON Properties

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
            <td>menuId</td>
            <td>define a custom id for menu item, will be written to the "Object Id for selected menu item id or name" if selected</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>text</td>
            <td>text of submenu</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>icon</td>
            <td>icon or image path of entry</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>iconColor</td>
            <td>icon color (works not if image is used)</td>
            <td>color</td>
            <td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
        </tr>
        <tr>
            <td>divider</td>
            <td>show a divider</td>
            <td>boolean</td>
            <td>false, true</td>
        </tr>
        <tr>
            <td>userGroups</td>
            <td>user groups that are allowed to view and control this entry.</td>
            <td>array[string]</td>
            <td>id of user groups</td>
        </tr>
        <tr>
            <td>behaviorNotInUserGroup</td>
            <td>hide or disable entry if user is not part of user group</td>
            <td>string</td>
            <td>hide, disabled</td>
        </tr>
    </tbody>
</table>

<!-- omit in toc -->
##### Submenu JSON Properties - Example

<details>
<pre><code>
[
	{
		"text": "subitem0",
		"icon": "account",
		"iconColor": "red"
	}, 
	{
		"text": "subitem1",
		"icon": "home",
		"iconColor": "green",
		"divider": "true"
	}, 
	{
		"text": "subitem1",
		"divider": "true",
		"icon": "/vis.0/myImages/devices/lxc_iobroker.png",
		"userGroups": ["administrator", "user"],
		"behaviorNotInUserGroup": "disabled"
	}
]
</code></pre>
</details>
