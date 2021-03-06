import { topmost } from "tns-core-modules/ui/frame";
import { RadRadialGauge, RadialScale, RadialBarIndicator } from "nativescript-ui-gauge";

// >> gauges-indicators-bars-animate
export function onNavigatedTo(args) {
    let gaugeView: RadRadialGauge = <RadRadialGauge>topmost().getViewById("gaugeView");
    let scale: RadialScale = <RadialScale>gaugeView.scales.getItem(0);
    for (let i = 0; i < scale.indicators.length; i++) {
        let barIndicator: RadialBarIndicator = <RadialBarIndicator>scale.indicators.getItem(i);
        if (barIndicator.maximum === 0) {
            barIndicator.maximum = Math.random() * 100;
        }
    }
}
// << gauges-indicators-bars-animate