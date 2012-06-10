(function(context){
	var App = {
		Views : {}
	};

	var BaseView = Backbone.View.extend({
		render : function(){
			var self = this;

			$('.page').hide(200);
			this.$el.show(200);
		}
	});

	var MainView = BaseView.extend({
		el : '#home'
	});

	var AboutUs = BaseView.extend({
		el : '#about'
	});

	var Sponsors = BaseView.extend({
		el : '#sponsors'
	});

	var Contact = BaseView.extend({
		el : '#contact'
	});

	App.panes = {
		mainView : new MainView(),
		aboutUs : new AboutUs(),
		sponsors : new Sponsors(),
		contact : new Contact()
	};

	var Router = Backbone.Router.extend({
		routes : {
			'' : 'main',
			'#' : 'main',
			'about' : 'about',
			'sponsors' : 'sponsors',
			'contact' : 'contact'
		},
		main : function(){
			App.panes.mainView.render();
		},
		about : function(){
			App.panes.aboutUs.render();
		},
		sponsors : function(){
			App.panes.sponsors.render();
		},
		contact : function(){
			App.panes.contact.render();
		}
	});

	App.router = new Router();

	Backbone.history.start();

	context.App = App;
	return context;
})(window);