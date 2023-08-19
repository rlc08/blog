const express = require('express');

var blogs = [
    {
        atitle: 'Tour the inner solar system',
        img: 'wildfire.webp',
        desc: 'Take a deep dive into the rocky planets that make up our local neighborhood.',
    },
    {
        atitle: 'CLIMATE CRISIS',
        img: 'space.jpg',
        desc: 'The Race to Save Yellowknife From Raging Wildfires',
    }
];

const home = (req, res) => {
    res.render('index', {
        title: 'Home',
        blog: blogs
    });
};

module.exports = { home };
