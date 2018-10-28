.PHONY=run ios android browser run-ios run-android run-browser build build-cordova-all \
build-cordova-android build-cordova-ios build-cordova-browser emulate emulate-android emulate-ios \
build-remote cordova-setup cordova-setup-1 cordova-setup-2 cordova-setup-3a cordova-setup-3b \
cordova-setup-4 emulate-launch-android-osx build-monaca emulate-base build-npm build-cordova-base \
update-cordova-config build-base build-all build-android build-ios build-browser setup-cordova \
serve cordova-setup-5 cordova-setup-6 cordova-setup-0 fix-android-sdk-issues setup-monaca \
monaca-setup monaca-setup-0 monaca-setup-1 monaca-setup-2 monaca-setup-3 monaca-setup-4 \
monaca-setup-5 monaca-build-android-debug

CORDOVA_DIR=cordova
APP_NAMESPACE=net.joeflack4.HealthHubMobile
APP_DESCRIPTION=Health Hub Mobile

# Tasks
# update-cordova-config:
# 	# cp ${CORDOVA_DIR}/config.xml cordova-config.xml; # That config may actually be erroneous.
# 	echo ""
sync-package-jsons:
	# echo If there are any conflicts, it seems that the last file listed will be the final word.
	# node node_modules/package-json-merge/bin/package-json-merge
	package-json-merge \
	${CORDOVA_DIR}/package.json package.json > package.json.temp; \
	node scripts/packageJsonMergeFix.js > package.json.temp2; \
	cp package.json.temp2 ${CORDOVA_DIR}/package.json; \
	cp package.json.temp2 package.json; \
	rm package.json.temp; \
	rm package.json.temp2

# Build
build-npm:
	npm run build
build-cordova-base:
	(cd ${CORDOVA_DIR}; \
	cordova build ${PLATFORM})
build-cordova-all:
	(cd ${CORDOVA_DIR}; \
	cordova build)
build-cordova-android:
	make build-cordova-base PLATFORM=android
build-cordova-ios:
	make build-cordova-base PLATFORM=android
build-cordova-browser:
	make build-cordova-base PLATFORM=browsers
build-base:
	printf "1. Building standard web app, using webpack and babel to transpile to ES5."; \
	make build-npm; \
	printf "2. Copy web build to cordova source files folder."; \
	rm -rf ${CORDOVA_DIR}/www/; \
	cp -r build/ ${CORDOVA_DIR}/www/; \
	printf "3. install"; \
	npm install; \
	printf "3. Merging standard web app and cordova package.json files together."\ ;
	make sync-package-jsons; \
	printf "4. Copying any other relevant files from root dir to cordova directory."; \
	echo Currently doing nothing for this step.; \
	printf "5. Getting copy of latest corodva config.xml file for backup purposes, just in case it has 
	changed since last build."; \
	make update-cordova-config; \
	printf "6. Installing dependencies in both places."; \
	(npm install); \
	(cd ${CORDOVA_DIR}; \
	npm install); \
	echo Base build and cordova sync complete!

build-android: build-base build-cordova-android
build-ios: build-base build-cordova-ios
build-browser: build-base build-cordova-browsers
build-all: build-base build-cordova-all
build: build-android

build-monaca:
	printf "Maybe I don't need cordova subdir w/ monaca?"; \
	cp -r src cordova/src; \
	cp -r public cordova/public; \
	(cd cordova; \
	monaca remote build --browser); \
	open https://console.monaca.mobi/dashboard
build-remote: build-monaca
monaca: build-monaca
monaca-build-android-debug:
	monaca remote build android --build-type=debug

# Running
## Browser
serve:
	npm start
## Emulation
## - Surprisingly, just using "emulator" doesn't work; requires path.
emulate-launch-android-osx:
	(~/Library/Android/sdk/tools/emulator \
	-avd Nexus_5_API_23 \
	-netdelay none \
	-netspeed full &)
emulate-base:
	(cd ${CORDOVA_DIR}; \
	cordova emulate ${PLATFORM} \
	--live-reload)
emulate-android: emulate-launch-android-osx
	sleep 7; \
	make emulate-base PLATFORM=android
emulate-ios:
	make emulate-base PLATFORM=ios
emulate: emulate-android
test: build emulate

## Monaca
# todo

## Run on device
## - I think this is for running on device connected by USB.
run-base:
	(cd ${CORDOVA_DIR}; \
	cordova run ${PLATFORM})
run-ios:
	make run-base PLATFORM=ios
run-android:
	make run-base PLATFORM=android
run-browser:
	make run-base PLATFORM=browser
ios: run-ios
browser: run-browser
android: run-android
run: run-android

# Setup
## Cordova Setup
fix-android-sdk-issues:
	# printf "This is to avoid...
	# A problem occurred configuring project ':CordovaLib'.
	# > No toolchains found in the NDK toolchains folder for ABI with prefix: mips64el-linux-android" \;
	mkdir -p ${ANDROID_HOME}/ndk-bundle/toolchains/mips64el-linux-android/prebuilt/darwin-x86_64
### One-time setup tasks to do after cloning project.
cordova-setup-0:
	make fix-android-sdk-issues
cordova-setup-1:
	# mv cordova-config.xml cordova-config.xml.bak\ ;
	rm -rf ${CORDOVA_DIR}; \
	mv package.json package.json.temp; \
	cordova create ${CORDOVA_DIR} ${APP_NAMESPACE} "${APP_DESCRIPTION}"
cordova-setup-2:
	# cp cordova-config.xml ${CORDOVA_DIR}/config.xml \;
	(cd ${CORDOVA_DIR}; \
	cordova platform add android; \
	cordova platform add ios)
cordova-setup-3a:
	(cd ${CORDOVA_DIR}; \
	cordova plugin add cordova-plugin-safariviewcontroller)
cordova-setup-3b:
	(cd ${CORDOVA_DIR}; \
	cordova plugin add cordova-plugin-customurlscheme \
	--variable URL_SCHEME={${APP_NAMESPACE}} \
	--variable ANDROID_SCHEME={${APP_NAMESPACE}} \
	--variable ANDROID_HOST={health-hub.auth0.com} \
	--variable ANDROID_PATHPREFIX=/cordova/{${APP_NAMESPACE}}/callback)
cordova-setup-3c:
	cp -r .monaca cordova/monaca; \
	cp .monacaignore cordova/.monacaignore
cordova-setup-4: sync-package-jsons
cordova-setup-5:
	npm install
cordova-setup-6:
	make build-base
# cordova-setup-7:
	# make build-monaca
# cordova-setup-8: update-cordova-config

cordova-setup:
	make cordova-setup-0; \
	make cordova-setup-1; \
	make cordova-setup-2; \
	make cordova-setup-3a; \
	make cordova-setup-3b; \
	make cordova-setup-3c; \
	make cordova-setup-4; \
	make cordova-setup-5; \
	make cordova-setup-6; \
setup-cordova: cordova-setup

## Monaca Setup
APP_FOLDER=monaca_app
monaca-setup-0:
	# create monaca app folder and init there
	printf "Prerequisites: (1) npm, (2) monaca installed and logged in."; \
	printf "- If getting an error when creating, try logging in again."; \
	printf "- In the interactive monaca installer, choose 'onsenui react app' 
	and 'tabbar'."; \
	monaca create ${APP_FOLDER}; \
monaca-setup-1:
	# remove, overwrite, and copy over files
	# removals
	rm ${APP_FOLDER}/LICENSE; \
	rm -rf ${APP_FOLDER}/src; \
	# overwrites
	cp .gitignore ${APP_FOLDER}/.gitignore; \
	cp .gitignore ${APP_FOLDER}/.monacaignore; \
	# copies
	cp makefile ${APP_FOLDER}/makefile; \
	cp README.md ${APP_FOLDER}/README.md; \
	cp env.js.example ${APP_FOLDER}/env.js.example; \
	cp -r src ${APP_FOLDER}; \
	cp -r permanent/post_build/copy ${APP_FOLDER}
monaca-setup-2:
	# rename files
	mv ${APP_FOLDER}/src/index.js ${APP_FOLDER}/src/main.jsx
monaca-setup-3:
	# update package.json and install new stuff
	package-json-merge ${APP_FOLDER}/package.json permanent/post_build/sync/package.json \
	> ${APP_FOLDER}/package.json.temp; \
	mv ${APP_FOLDER}/package.json.temp ${APP_FOLDER}/package.json; \
	cd ${APP_FOLDER}; npm install
monaca-setup-4:
	printf "Do this part manually: \
	  ${APP_FOLDER}/package.json \
	        \"build\": "webpack --mode production",
    		\"watch\": "webpack --watch --mode production",
			-->
			"build": "webpack --mode development",
    		"watch": "webpack --watch --mode development",
			"buildProd": "webpack --mode production",
			"watchProd": "webpack --watch --mode production",
	"
monaca-setup-5:
	echo .
monaca-setup:
	make monaca-setup-0; \
	make monaca-setup-1; \
	make monaca-setup-2; \
	make monaca-setup-3; \
	make monaca-setup-4; \
	make monaca-setup-5; \
setup-monaca: monaca-setup
