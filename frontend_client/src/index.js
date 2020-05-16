const app = new AppContainer();
app.renderBusinesses();
setTimeout(() => {
    app.bindEventListeners();
}, 3000)      
