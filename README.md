# little-monk
## The forum for openhanded exchange of quotes and short stories, discussions and connections

![little-monk](/client/src/assets/little-monk-icon.png)

# Wireframes v1.0
![homepage](/wireframes/homepage.png)
![stories-list](/wireframes/stories-list.png)
![quotes-list](/wireframes/quotes-list.png)
![quote-create](/wireframes/quote-create.png)
![story-edit](/wireframes/story-edit.png)
![story-view](/wireframes/story-view.png)
![quote-view](/wireframes/quote-view.png)
![discussion](/wireframes/discussion.png)
![my-collection](/wireframes/my-collection.png)

# Set Up
``` bash
#install dependencies
npm install

#run client at localhost:8080
npm run dev

#run server at localhost:8081
npm start

```
# TODO:
## Client:
- [ ] Optimize communication between client and server (e.g. via caching)
- [ ] Implement connect-history-api-fallback and 404/catchall handling
- [ ] Security: clean up client before sending private info, hash key with once-off nonce, send via HTTPS, irreversibly hash with another unique salt before storing

## Server:
- [ ] Server-side rendering
- [ ] Containerize microservices via Docker
- [ ] Optimize DB operations (via indexing, etc)
- [ ] Uglify JS

## Overall:
- [ ] Implement more robust error handling and input checking (e.g. escaping for XSS,, input validation, URL encode input and output)
- [ ] Implement cucumber and selenium tests
- [ ] Modularize code as usage patterns arise

## Functionality:
- [x] Fundamental MERN stack set-up
- [x] Fundamental UI design
- [x] CRUD functionality for entries
- [x] Create more robust UI wireframes
- [x] Create logo icon
- [x] Update UI
- [ ] Feature: Account management
- [ ] Feature: Discussion view
- [ ] Feature: Emoji reactions
- [ ] Feature: Notifications
- [ ] Feature: Sharing

# Planned Features:
- [ ] Search for posts and users
- [ ] User-formed connections between posts (as voted tags?)
- [ ] Multimedia posts?
- [ ] Suggested posts?
