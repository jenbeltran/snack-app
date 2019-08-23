const Footer = () => (
	<div id="footer">
		<div className="text-center py-3">
			<a href="mailto:francescajenbeltran@gmail.com" target="_blank">
				<img src="https://image.flaticon.com/icons/svg/831/831357.svg" alt="Instagram link" />
			</a>

			<a href="https://www.linkedin.com/in/jenfbeltran" target="_blank">
				<img src="https://image.flaticon.com/icons/svg/254/254394.svg" alt="LinkedIn link" />
			</a>

			<a href="https://github.com/jenbeltran" target="_blank">
				<img src="https://image.flaticon.com/icons/svg/25/25657.svg" alt="Github link" />
			</a>

			<a href="https://www.instagram.com/everythingjenbeltran" target="_blank">
				<img src="https://image.flaticon.com/icons/svg/254/254393.svg" alt="Instagram link" />
			</a>

			<p>Jen Beltran 2019</p>
		</div>

		<style jsx>{`
			img {
				width: 35px;
				height: 35px;
				margin: 5px;
			}
		`}</style>
	</div>
);

export default Footer;
