import React from 'react';
import HeadlinerMiscLeft from '../headliner-misc-svg/headliner-misc-left';
import HeadlinerMiscRight from '../headliner-misc-svg/headliner-misc-right';
import HeadlinerVideos from './headliner-video-section/headliner-video-section';
import '../headliner.styles.css';

const HeadlinerCarousel = () => {
	return (
		<div className="headliner-carousel">
			<div className="headliner-svg-left-outter">
				<div className="headliner-left-svg">
					<button className="headliner-left-btn" />
					<span className="headliner-left-span">
						<HeadlinerMiscLeft />
					</span>
				</div>
			</div>
			<div className="headliner-video-section">
				<HeadlinerVideos />
			</div>
			<div className="headliner-svg-right-outter">
				<div className="headliner-right-svg">
					<span className="headliner-right-span">
						<HeadlinerMiscRight />
					</span>
					<button className="headliner-right-btn" />
				</div>
			</div>
		</div>
	);
};

export default HeadlinerCarousel;
