var app = new Framework7({
  root: '#app',
  name: 'App for FC',
  id: 'com.myapp.test',
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
	{
      path: '/link1/',
      url: 'link1.html',
	  options : {
		pushState : true
	  }
    },
	{
      path: '/link2/',
	  // Ici, on peut indiquer le contenu directement en "string", on peut utiliser le symbole `pour cela
      content: 
		`
		<div class="page" data-name="link2">

			<div class="navbar">
				<div class="navbar-inner">
					<div class="left">
						<a class="link back">
							<p>Back</p>
						</a>
					</div>
				</div>
			</div>

			<div class="page-content">
				<p>Link 2 content</p>
			</div>
		</div>
		`,
    },
  ],
});

var mainView = app.views.create('.view-main');