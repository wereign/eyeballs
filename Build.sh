#!/bin/bash
set -e

tsc main.ts
sass style.scss:style.css
