controllers.homePage = function(data, params){
  console.log('Controller - home');
  var homeContent = templates.intro();
  homeContent += templates.homeSection(ros[0].what);
  homeContent += templates.homeSection(ros[0].who);
  homeContent += templates.homeSection(ros[0].how);
  homeContent += templates.homeSection(ros[0].security);
  homeContent += templates.homeSection(ros[0].background);
  homeContent += templates.homeSection(ros[0].support);
  document.querySelector('body').classList.remove('buildPage');
  utils.render('page', homeContent);
};
