#!/usr/bin/env node
import esbuild from 'esbuild'
import baseConfig from './config.base.js'

await esbuild.build({...baseConfig, watch: true}) 

console.log('Wathching...')