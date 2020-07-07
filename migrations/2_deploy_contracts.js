const Token = artifacts.require('Token')

const name = 'FlxToken'
const symbol = 'Flx'

module.exports = function (deployer) {
  deployer.deploy(Token, name, symbol, 1000000)
}
