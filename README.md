# Tailwind CSS Classes Not Working in Functional Component with Object Arrow Function Methods

This repository demonstrates an uncommon bug where Tailwind CSS classes fail to apply when an event handler (e.g., `onClick`) is assigned an arrow function within an object's method definition within a functional component.

## Problem Description

The problem arises when an event handler method, defined as an arrow function within an object, is used as a prop for an HTML element inside a functional component that employs Tailwind CSS.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install necessary packages.
3. Run `npm start` to start the development server.
4. Observe that the button styling is not applied correctly.

## Solution

The solution involves using a regular function or binding the context of the arrow function method.