## build

! **[1]** npm install -g eas-cli _(for mac: sudo npm install -g eas-cli)_

! **[2]** npx expo installexpo-dev-client

! **[3]** eas login _(expo eccount)_

! **[4]** eas whoami

! **[5]** eas build -p android --profile preview

### [eas.json]

{ "cli": { "version": ">= 0.50.0" }, "build": { "development": {
"developmentClient": true, "distribution": "internal" }, "preview": { "android":
{ "buildType": "apk" }, "ios": { "simulator": "true" }, "distribution":
"internal" }, "production": {} }, "submit": { "production": {} } }
