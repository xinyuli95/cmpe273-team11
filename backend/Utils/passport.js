"use strict";
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const {secret} = require("./config");
const db = require('../Utils/mysqlConfig');

// Setup work and export for the JWT passport strategy
function auth() {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: secret
    };
    passport.use(
        new JwtStrategy(opts, (jwt_payload, callback) => {
            const user_id = jwt_payload.id;
            db.query(
                "SELECT * FROM users WHERE id = ?", [user_id],
                function (err, results) {
                    if (err) {
                        return callback(err, false);
                    }
                    if (results) {
                        callback(null, results);
                    } else {
                        callback(null, false);
                    }
                });
        })
    )
}

exports.auth = auth;
exports.checkAuth = passport.authenticate("jwt", {session: false});