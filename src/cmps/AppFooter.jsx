import Facebook from '../assets/icons/facebook.svg?react'
import Instagram from '../assets/icons/instagram.svg?react'
import Tweeter from '../assets/icons/tweeter.svg?react'

export function AppFooter() {
	return (
		<footer className="app-footer">
			<section className="footer-top">
				<div className="footer-content-wrapper">
					<div className="footer-links">
						<div className="footer-column">
							<h4>Company</h4>
							<a>About</a>
							<a>Jobs</a>
							<a>For the Record</a>
						</div>
						<div className="footer-column">
							<h4>Communities</h4>
							<a>For Artists</a>
							<a>Developers</a>
							<a>Advertising</a>
							<a>Investors</a>
							<a>Vendors</a>
						</div>
						<div className="footer-column">
							<h4>Useful links</h4>
							<a>Support</a>
							<a>Free Mobile App</a>
						</div>
						<div className="footer-column">
							<h4>Stupify Plans</h4>
							<a>Premium Individual</a>
							<a>Premium Duo</a>
							<a>Premium Family</a>
							<a>Premium Student</a>
							<a>Stupify Free</a>
						</div>
					</div>

					<div className="footer-social">
						<div className="social-icon"><Instagram /></div>
						<div className="social-icon"><Tweeter /></div>
						<div className="social-icon"><Facebook /></div>
					</div>
				</div>
			</section>

			<section className="footer-bottom">
				<div className="legal-links">
					<a>Legal</a>
					<a>Safety & Privacy Center</a>
					<a>Privacy Policy</a>
					<a>Cookies</a>
					<a>About Ads</a>
					<a>Accessibility</a>
				</div>
				<p className="copyright">© 2025 Stupify AB</p>
			</section>
		</footer>
	)
}
