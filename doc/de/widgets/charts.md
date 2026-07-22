# Diagramme

[Anwenderhandbuch](../README.md) › [Widget-Katalog](README.md) · [English](../../en/widgets/charts.md)

Vier native VIS-2-Diagramme für unterschiedliche Datenquellen.

<img src="../../media/vis2_charts_runtime.png" alt="Material-Design-Diagramme in VIS 2">

## Widgets

- [Balkendiagramm](chart-bar.md) – einzelne aktuelle State-Werte vergleichen.
- [Kreisdiagramm](chart-pie.md) – Anteile einzelner aktueller State-Werte darstellen.
- [JSON-Diagramm](chart-json.md) – mehrere Balken- und Linienreihen aus einem JSON-State kombinieren.
- [Linienverlaufsdiagramm](chart-line-history.md) – Zeitreihen direkt aus einer History-Instanz laden.

Bar und Pie können ihre Werte entweder aus indizierten Editor-Datensätzen oder
aus einem gemeinsamen JSON-State lesen. JSON Chart erwartet ein eigenes
Mehrreihenformat. Line History fragt historische Werte über die ausgewählte
History-Adapterinstanz ab.

## Gemeinsame Einstellungen

<table>
<tr><td><img src="../../media/vis2_charts_editor_overview.png" width="300"></td>
<td><ul><li><b>Kartenlayout:</b> bettet das Diagramm mit optionalem HTML-Titel in eine Material-Design-Karte ein.</li><li><b>Farbschema:</b> verteilt eine Palette auf Datensätze ohne eigene Farbe.</li><li><b>Legendenposition:</b> oben und unten ordnen Einträge horizontal, links und rechts vertikal an.</li><li><b>Tooltip:</b> zeigt Werte beim Berühren oder Überfahren eines Diagrammelements.</li></ul></td></tr>
</table>
