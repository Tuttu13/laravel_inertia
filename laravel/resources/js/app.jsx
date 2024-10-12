import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import './bootstrap';

import React from "react";

import '../css/reset.css';
import '../css/style.css';

createInertiaApp({
    resolve: name => {
        const pages = require.context('./Pages', true, /\.jsx$/);
        return pages[`./Pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});