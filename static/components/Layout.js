const Layout = (props) => {
	return (
		<div className="page-layout">
			{props.children}
			<style jsx global>{`
				body {
					background-color: #f5efff;
					color: #494947;
				}
				a {
					color: black;
				}
				h1 {
					margin-top: 30px;
					font-family: 'Passion One', cursive;
				}
			`}</style>
		</div>
	);
};

export default Layout;
