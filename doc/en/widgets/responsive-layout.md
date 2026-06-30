# Responsive Layout

[Back to README](../../../README.md#widget-documentation)

There are two widgets - Masonry Views and Grid Views - with which it is possible to create a repsonsive layout (a layout for desktop, tablet and mobile). Both Widgets has multiple `view in widget` integrated.


### Masonry Views

![Logo](../media/masnory.gif)

Masonry Views has multiple `view in widget` integrated, that will be ordered automatically depending of the width of the widget. With this widget it is possible to create a responsive layout (one layout for desktop, tablet and mobil).
Masonry views are especially useful if the views included have different heights.


<b>Take a look at the [Material Design Widgets example project](https://github.com/Scrounger/ioBroker.vis-materialdesign#online-example-project)</b> to understand how it works.

#### Editor Settings 

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
            <td rowspan=1><img src="../media/masonry_resolution_settings.png"></td>
            <td colspan=2>Depending on the width of the widget, the number of columns and the distance between the views can be set. The settings can be set independently for portrait and landscape format.
            To find out the width of the resolution for the different devices, activate the Resolution Assistant under the common settings.</td>
        </tr>
        <tr>
            <td rowspan=2><img src="../media/masnory_settings_views.png"></td>
            <td>width of view[x]</td>
            <td>Define the width of the view. Allowed values are number, px, % or calc. Examples: <code>100</code>, <code>100px</code>, <code>55%</code>, <code>calc(60% - 12px)</code></td>
        </tr>
        <tr>
            <td>height of view[x]</td>
            <td>Here you can specify the height of the view used. 
                <br><br>If you want the height to adjust variably to the view, then this input must be empty and for the widget with the highest height in the view the position must be set to relative, see screenshot:
                <br><br>
                <img src="../media/masonry_grid_position_settings.png">
            </td>
        </tr>
    </tbody>
</table>

### Grid Views

![Logo](../media/grid.gif)

Grid Views has multiple `view in widget` integrated, that will be ordered automatically depending of the width of the widget. With this widget it is possible to create a responsive layout (one layout for desktop, tablet and mobil).
Grid views are especially useful if the views included have the same heights.

<b>The Grid View widget has 12 columns in total. If you want a view to have a width of 4 columns, you have to set column span to 4 in the corresponding view[x]</b>

<b>Take a look at the [Material Design Widgets example project](https://github.com/Scrounger/ioBroker.vis-materialdesign#online-example-project)</b> to understand how it works.

#### Editor Settings 

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
            <td rowspan=1><img src="../media/grid_settings_resolution.png"></td>
            <td colspan=2>Depending on the width of the widget, defined from which width of the widget the rules for column span of the individual views[x] can be applied and the distance between the views. The settings can be set independently for portrait and landscape format.
            To find out the width of the resolution for the different devices, activate the Resolution Assistant under the common settings.</td>
        </tr>
        <tr>
            <td rowspan=2><img src="../media/grid_settings_view.png"></td>
            <td colspan=2>Define the column span of the view depending of the current width resolution rule.<br>You can also specify here whether a view should only be displayed at a resolution higher or lower than a defined value or whether it should be visible via a object id.</td>
        </tr>
        <tr>
            <td>height of view[x]</td>
            <td>Here you can specify the height of the view used. 
                <br><br>If you want the height to adjust variably to the view, then this input must be empty and for the widget with the highest height in the view the position must be set to relative, see screenshot:
                <br><br>
                <img src="../media/masonry_grid_position_settings.png">
            </td>
    </tbody>
</table>
