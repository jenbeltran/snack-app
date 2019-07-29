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
			`}</style>
		</div>
	);
};

export default Layout;
