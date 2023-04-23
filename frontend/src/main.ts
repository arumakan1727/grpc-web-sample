import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { GreeterClient } from './grpc/greeter.client.ts';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'

const baseUrl = 'http://localhost:50051';
const client = new GreeterClient(new GrpcWebFetchTransport({ baseUrl }));

console.log(`Created GreeterClient with baseUrl=${baseUrl}`);

client.sayHello({ name: 'Bob' })
  .then((value) => {
    const { status, response, method } = value;
    console.log(`[Resp] status=${status} method=${method}`)
    console.log(`[Resp] resp=${response}`)
  })
  .catch((err) => {
    console.log(`[Err]`, err);
  });

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
