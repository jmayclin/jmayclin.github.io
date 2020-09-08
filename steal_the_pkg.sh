rm -rf /assets/pkg/
rm -rf ../thimblerigger/pkg
wasm-pack build --target no-modules ../thimblerigger/ 
cp -r ../thimblerigger/pkg ./assets/pkg/