import './styles.scss';
import BitcoinLogo from './assets/bitcoin-brands.svg';

console.log('webpack template 1')

async function start() {
  return await Promise.resolve('async is working');
}

start().then(console.log);