const app = new AppContainer();
app.renderBusinesses();
app.renderCarriers();
setTimeout(() => {
    app.bindEventListeners();
}, 3000)      
