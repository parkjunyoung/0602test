import passport from 'passport';
import LocalStrategy from 'passport-local';
import db from '../models'

export default function(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        (email, password, done) => {
            return done(null)
        }
    ));

    // serialize시 한커번에 user data를 세션에 저장.
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
}
