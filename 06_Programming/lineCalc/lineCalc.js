// File Name: LineCalc.js
//
// This calculates the slope of a line.
//
// Author: Bryant Phan

function standSlope(A, B, C) {
    return -A/B
}
function standXint(A, B, C) {
    return C/A
}
function standYint(A, B, C) {
    return C/B
}

function slopeIntSlope(m, b) {
    return m
}
function slopeIntXint(m, b) {
    return b/m
}
function slopeIntYint(m, b) {
    return b
}

module.exports = {
    standSlope: standSlope,
    standXint: standXint,
    standYint: standYint,
    slopeIntSlope: slopeIntSlope,
    slopeIntXint: slopeIntXint,
    slopeIntYint: slopeIntYint
}