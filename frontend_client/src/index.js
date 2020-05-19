const app = new AppContainer();
app.renderBusinesses();
app.rednerCarriers();
setTimeout(() => {
    app.bindEventListeners();
}, 3000)      
