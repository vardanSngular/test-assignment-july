require('dotenv').config();

const express = require('express');
const cors = require('cors');

const AuthMiddleware = require('./Middlewares/AuthMiddleware')

const LoginRouter = require('./Router/Login/LoginRouter');
const SignupRouter = require('./Router/Signup/SignupRouter');
const DashboardRouter = require('./Router/Dashboard/DashboardRouter');
const SettingsRouter = require('./Router/Settings/SettingsRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', AuthMiddleware);
app.use('/login', LoginRouter);
app.use('/signup', SignupRouter);
app.use('/dashboard', DashboardRouter);
app.use('/settings', SettingsRouter);

app.listen(4000);