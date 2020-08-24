rm -rf pkg/
wasm-pack build --target no-module ../thimblerigger/ 
cp -r ../thimblerigger/pkg .