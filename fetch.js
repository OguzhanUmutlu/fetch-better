// noinspection JSUnusedGlobalSymbols

const httpAgent = require("_http_agent");
const http = require("http");
const https = require("https");
const uriParser = require("querystring");
const fs = require("fs");

class EasyFetch {
    /**
     * @param {string} url
     * @param {Function?} success
     * @param {Function?} error
     * @param {(httpAgent.Agent | boolean)?} agent
     * @param {string?} auth
     * @param {Function?} createConnection
     * @param {number?} defaultPort
     * @param {number?} family
     * @param {Object?} headers
     * @param {number?} hints
     * @param {string?} host
     * @param {string?} hostname
     * @param {boolean?} insecureHTTPParser
     * @param {string?} localAddress
     * @param {number?} localPort
     * @param {Function?} lookup
     * @param {number?} maxHeaderSize
     * @param {string?} method
     * @param {string?} path
     * @param {number?} port
     * @param {string?} protocol
     * @param {boolean?} setHost
     * @param {string?} socketPath
     * @param {number?} timeout
     * @param {AbortSignal?} signal
     */
    static request(url, {
        success = () => {
        },
        error = () => {
        },
        agent,
        auth,
        createConnection,
        defaultPort,
        family,
        headers,
        hints,
        host,
        hostname,
        insecureHTTPParser,
        localAddress,
        localPort,
        lookup,
        maxHeaderSize,
        method,
        path,
        port,
        protocol,
        setHost,
        socketPath,
        timeout,
        signal
    }) {
        let parsedUrl = uriParser.stringify({url});
        let req = (parsedUrl.protocol === "https:" ? https : http).request({
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            method,
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        }, res => {
            const chunks = [];
            res.on("error", error);
            res.on("data", chunk => chunks.push(chunk));
            res.on("end", () => success());
        });
        req.end();
    }

    /**
     * @param {string} url
     * @param {Function?} success
     * @param {Function?} error
     * @param {(httpAgent.Agent | boolean)?} agent
     * @param {string?} auth
     * @param {Function?} createConnection
     * @param {number?} defaultPort
     * @param {number?} family
     * @param {Object?} headers
     * @param {number?} hints
     * @param {string?} host
     * @param {string?} hostname
     * @param {boolean?} insecureHTTPParser
     * @param {string?} localAddress
     * @param {number?} localPort
     * @param {Function?} lookup
     * @param {number?} maxHeaderSize
     * @param {string?} path
     * @param {number?} port
     * @param {string?} protocol
     * @param {boolean?} setHost
     * @param {string?} socketPath
     * @param {number?} timeout
     * @param {AbortSignal?} signal
     */
    static get(url, {
        success = () => {
        },
        error = () => {
        },
        agent,
        auth,
        createConnection,
        defaultPort,
        family,
        headers,
        hints,
        host,
        hostname,
        insecureHTTPParser,
        localAddress,
        localPort,
        lookup,
        maxHeaderSize,
        path,
        port,
        protocol,
        setHost,
        socketPath,
        timeout,
        signal
    }) {
        EasyFetch.request(url, {
            success,
            error,
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            method: "GET",
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        });
    }

    /**
     * @param {string} url
     * @param {Function?} success
     * @param {Function?} error
     * @param {(httpAgent.Agent | boolean)?} agent
     * @param {string?} auth
     * @param {Function?} createConnection
     * @param {number?} defaultPort
     * @param {number?} family
     * @param {Object?} headers
     * @param {number?} hints
     * @param {string?} host
     * @param {string?} hostname
     * @param {boolean?} insecureHTTPParser
     * @param {string?} localAddress
     * @param {number?} localPort
     * @param {Function?} lookup
     * @param {number?} maxHeaderSize
     * @param {string?} path
     * @param {number?} port
     * @param {string?} protocol
     * @param {boolean?} setHost
     * @param {string?} socketPath
     * @param {number?} timeout
     * @param {AbortSignal?} signal
     */
    static post(url, {
        success = () => {
        },
        error = () => {
        },
        agent,
        auth,
        createConnection,
        defaultPort,
        family,
        headers,
        hints,
        host,
        hostname,
        insecureHTTPParser,
        localAddress,
        localPort,
        lookup,
        maxHeaderSize,
        path,
        port,
        protocol,
        setHost,
        socketPath,
        timeout,
        signal
    }) {
        EasyFetch.request(url, {
            success,
            error,
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            method: "POST",
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        });
    }

    /**
     * @param {string} url
     * @param {Function?} success
     * @param {Function?} error
     * @param {(httpAgent.Agent | boolean)?} agent
     * @param {string?} auth
     * @param {Function?} createConnection
     * @param {number?} defaultPort
     * @param {number?} family
     * @param {Object?} headers
     * @param {number?} hints
     * @param {string?} host
     * @param {string?} hostname
     * @param {boolean?} insecureHTTPParser
     * @param {string?} localAddress
     * @param {number?} localPort
     * @param {Function?} lookup
     * @param {number?} maxHeaderSize
     * @param {string?} path
     * @param {number?} port
     * @param {string?} protocol
     * @param {boolean?} setHost
     * @param {string?} socketPath
     * @param {number?} timeout
     * @param {AbortSignal?} signal
     */
    static put(url, {
        success = () => {
        },
        error = () => {
        },
        agent,
        auth,
        createConnection,
        defaultPort,
        family,
        headers,
        hints,
        host,
        hostname,
        insecureHTTPParser,
        localAddress,
        localPort,
        lookup,
        maxHeaderSize,
        path,
        port,
        protocol,
        setHost,
        socketPath,
        timeout,
        signal
    }) {
        EasyFetch.request(url, {
            success,
            error,
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            method: "PUT",
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        });
    }

    /**
     * @param {string} url
     * @param {Function?} success
     * @param {Function?} error
     * @param {(httpAgent.Agent | boolean)?} agent
     * @param {string?} auth
     * @param {Function?} createConnection
     * @param {number?} defaultPort
     * @param {number?} family
     * @param {Object?} headers
     * @param {number?} hints
     * @param {string?} host
     * @param {string?} hostname
     * @param {boolean?} insecureHTTPParser
     * @param {string?} localAddress
     * @param {number?} localPort
     * @param {Function?} lookup
     * @param {number?} maxHeaderSize
     * @param {string?} path
     * @param {number?} port
     * @param {string?} protocol
     * @param {boolean?} setHost
     * @param {string?} socketPath
     * @param {number?} timeout
     * @param {AbortSignal?} signal
     */
    static delete(url, {
        success = () => {
        },
        error = () => {
        },
        agent,
        auth,
        createConnection,
        defaultPort,
        family,
        headers,
        hints,
        host,
        hostname,
        insecureHTTPParser,
        localAddress,
        localPort,
        lookup,
        maxHeaderSize,
        path,
        port,
        protocol,
        setHost,
        socketPath,
        timeout,
        signal
    }) {
        EasyFetch.request(url, {
            success,
            error,
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            method: "DELETE",
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        });
    }

    /**
     * @param {string} url
     * @param {Function?} success
     * @param {Function?} error
     * @param {(httpAgent.Agent | boolean)?} agent
     * @param {string?} auth
     * @param {Function?} createConnection
     * @param {number?} defaultPort
     * @param {number?} family
     * @param {Object?} headers
     * @param {number?} hints
     * @param {string?} host
     * @param {string?} hostname
     * @param {boolean?} insecureHTTPParser
     * @param {string?} localAddress
     * @param {number?} localPort
     * @param {Function?} lookup
     * @param {number?} maxHeaderSize
     * @param {string?} path
     * @param {number?} port
     * @param {string?} protocol
     * @param {boolean?} setHost
     * @param {string?} socketPath
     * @param {number?} timeout
     * @param {AbortSignal?} signal
     */
    static head(url, {
        success = () => {
        },
        error = () => {
        },
        agent,
        auth,
        createConnection,
        defaultPort,
        family,
        headers,
        hints,
        host,
        hostname,
        insecureHTTPParser,
        localAddress,
        localPort,
        lookup,
        maxHeaderSize,
        path,
        port,
        protocol,
        setHost,
        socketPath,
        timeout,
        signal
    }) {
        EasyFetch.request(url, {
            success,
            error,
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            method: "HEAD",
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        });
    }

    /**
     * @param {string} url
     * @param {Function?} success
     * @param {Function?} error
     * @param {(httpAgent.Agent | boolean)?} agent
     * @param {string?} auth
     * @param {Function?} createConnection
     * @param {number?} defaultPort
     * @param {number?} family
     * @param {Object?} headers
     * @param {number?} hints
     * @param {string?} host
     * @param {string?} hostname
     * @param {boolean?} insecureHTTPParser
     * @param {string?} localAddress
     * @param {number?} localPort
     * @param {Function?} lookup
     * @param {number?} maxHeaderSize
     * @param {string?} path
     * @param {number?} port
     * @param {string?} protocol
     * @param {boolean?} setHost
     * @param {string?} socketPath
     * @param {number?} timeout
     * @param {AbortSignal?} signal
     */
    static options(url, {
        success = () => {
        },
        error = () => {
        },
        agent,
        auth,
        createConnection,
        defaultPort,
        family,
        headers,
        hints,
        host,
        hostname,
        insecureHTTPParser,
        localAddress,
        localPort,
        lookup,
        maxHeaderSize,
        path,
        port,
        protocol,
        setHost,
        socketPath,
        timeout,
        signal
    }) {
        EasyFetch.request(url, {
            success,
            error,
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            method: "OPTIONS",
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        });
    }

    /**
     * @param {string} url
     * @param {Function?} success
     * @param {Function?} error
     * @param {(httpAgent.Agent | boolean)?} agent
     * @param {string?} auth
     * @param {Function?} createConnection
     * @param {number?} defaultPort
     * @param {number?} family
     * @param {Object?} headers
     * @param {number?} hints
     * @param {string?} host
     * @param {string?} hostname
     * @param {boolean?} insecureHTTPParser
     * @param {string?} localAddress
     * @param {number?} localPort
     * @param {Function?} lookup
     * @param {number?} maxHeaderSize
     * @param {string?} path
     * @param {number?} port
     * @param {string?} protocol
     * @param {boolean?} setHost
     * @param {string?} socketPath
     * @param {number?} timeout
     * @param {AbortSignal?} signal
     */
    static patch(url, {
        success = () => {
        },
        error = () => {
        },
        agent,
        auth,
        createConnection,
        defaultPort,
        family,
        headers,
        hints,
        host,
        hostname,
        insecureHTTPParser,
        localAddress,
        localPort,
        lookup,
        maxHeaderSize,
        path,
        port,
        protocol,
        setHost,
        socketPath,
        timeout,
        signal
    }) {
        EasyFetch.request(url, {
            success,
            error,
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            method: "PATCH",
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        });
    }

    static download(url, file) {
        return new Promise((resolve, reject) => {
            EasyFetch.request(url, {
                success: body => {
                    fs.writeFile(file, body, (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                },
                error: error => {
                    reject(error);
                }
            });
        });
    }

    static promises = class EasyFetchPromises {
        /**
         * @param {string} url
         * @param {Function?} success
         * @param {Function?} error
         * @param {(httpAgent.Agent | boolean)?} agent
         * @param {string?} auth
         * @param {Function?} createConnection
         * @param {number?} defaultPort
         * @param {number?} family
         * @param {Object?} headers
         * @param {number?} hints
         * @param {string?} host
         * @param {string?} hostname
         * @param {boolean?} insecureHTTPParser
         * @param {string?} localAddress
         * @param {number?} localPort
         * @param {Function?} lookup
         * @param {number?} maxHeaderSize
         * @param {string?} method
         * @param {string?} path
         * @param {number?} port
         * @param {string?} protocol
         * @param {boolean?} setHost
         * @param {string?} socketPath
         * @param {number?} timeout
         * @param {AbortSignal?} signal
         * @returns {Promise<>}
         */
        static async request(url, {
            success = () => {
            },
            error = () => {
            },
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            method,
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        }) {
            return await new Promise((resolve, reject) => EasyFetch.request(url, {
                success: body => resolve(body),
                error: reject,
                agent,
                auth,
                createConnection,
                defaultPort,
                family,
                headers,
                hints,
                host,
                hostname,
                insecureHTTPParser,
                localAddress,
                localPort,
                lookup,
                maxHeaderSize,
                method,
                path,
                port,
                protocol,
                setHost,
                socketPath,
                timeout,
                signal
            }));
        }

        static get(url, {
            success = () => {
            },
            error = () => {
            },
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        }) {
            return new Promise((resolve, reject) => EasyFetch.request(url, {
                success: body => {
                    success(body);
                    resolve(body);
                },
                error: () => {
                    error();
                    reject();
                },
                agent,
                auth,
                createConnection,
                defaultPort,
                family,
                headers,
                hints,
                host,
                hostname,
                insecureHTTPParser,
                localAddress,
                localPort,
                lookup,
                maxHeaderSize,
                path,
                port,
                protocol,
                setHost,
                socketPath,
                timeout,
                signal,
                method: "GET"
            }));
        }

        static post(url, {
            success = () => {
            },
            error = () => {
            },
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        }) {
            return new Promise((resolve, reject) => EasyFetch.request(url, {
                success: body => {
                    success(body);
                    resolve(body);
                },
                error: () => {
                    error();
                    reject();
                },
                agent,
                auth,
                createConnection,
                defaultPort,
                family,
                headers,
                hints,
                host,
                hostname,
                insecureHTTPParser,
                localAddress,
                localPort,
                lookup,
                maxHeaderSize,
                path,
                port,
                protocol,
                setHost,
                socketPath,
                timeout,
                signal,
                method: "POST"
            }));
        }

        static head(url, {
            success = () => {
            },
            error = () => {
            },
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        }) {
            return new Promise((resolve, reject) => EasyFetch.request(url, {
                success: body => {
                    success(body);
                    resolve(body);
                },
                error: () => {
                    error();
                    reject();
                },
                agent,
                auth,
                createConnection,
                defaultPort,
                family,
                headers,
                hints,
                host,
                hostname,
                insecureHTTPParser,
                localAddress,
                localPort,
                lookup,
                maxHeaderSize,
                path,
                port,
                protocol,
                setHost,
                socketPath,
                timeout,
                signal,
                method: "HEAD"
            }));
        }

        static put(url, {
            success = () => {
            },
            error = () => {
            },
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        }) {
            return new Promise((resolve, reject) => EasyFetch.request(url, {
                success: body => {
                    success(body);
                    resolve(body);
                },
                error: () => {
                    error();
                    reject();
                },
                agent,
                auth,
                createConnection,
                defaultPort,
                family,
                headers,
                hints,
                host,
                hostname,
                insecureHTTPParser,
                localAddress,
                localPort,
                lookup,
                maxHeaderSize,
                path,
                port,
                protocol,
                setHost,
                socketPath,
                timeout,
                signal,
                method: "PUT"
            }));
        }

        static delete(url, {
            success = () => {
            },
            error = () => {
            },
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        }) {
            return new Promise((resolve, reject) => EasyFetch.request(url, {
                success: body => {
                    success(body);
                    resolve(body);
                },
                error: () => {
                    error();
                    reject();
                },
                agent,
                auth,
                createConnection,
                defaultPort,
                family,
                headers,
                hints,
                host,
                hostname,
                insecureHTTPParser,
                localAddress,
                localPort,
                lookup,
                maxHeaderSize,
                path,
                port,
                protocol,
                setHost,
                socketPath,
                timeout,
                signal,
                method: "DELETE"
            }));
        }

        static connect(url, {
            success = () => {
            },
            error = () => {
            },
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        }) {
            return new Promise((resolve, reject) => EasyFetch.request(url, {
                success: body => {
                    success(body);
                    resolve(body);
                },
                error: () => {
                    error();
                    reject();
                },
                agent,
                auth,
                createConnection,
                defaultPort,
                family,
                headers,
                hints,
                host,
                hostname,
                insecureHTTPParser,
                localAddress,
                localPort,
                lookup,
                maxHeaderSize,
                path,
                port,
                protocol,
                setHost,
                socketPath,
                timeout,
                signal,
                method: "CONNECT"
            }));
        }

        static options(url, {
            success = () => {
            },
            error = () => {
            },
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        }) {
            return new Promise((resolve, reject) => EasyFetch.request(url, {
                success: body => {
                    success(body);
                    resolve(body);
                },
                error: () => {
                    error();
                    reject();
                },
                agent,
                auth,
                createConnection,
                defaultPort,
                family,
                headers,
                hints,
                host,
                hostname,
                insecureHTTPParser,
                localAddress,
                localPort,
                lookup,
                maxHeaderSize,
                path,
                port,
                protocol,
                setHost,
                socketPath,
                timeout,
                signal,
                method: "OPTIONS"
            }));
        }

        static trace(url, {
            success = () => {
            },
            error = () => {
            },
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        }) {
            return new Promise((resolve, reject) => EasyFetch.request(url, {
                success: body => {
                    success(body);
                    resolve(body);
                },
                error: () => {
                    error();
                    reject();
                },
                agent,
                auth,
                createConnection,
                defaultPort,
                family,
                headers,
                hints,
                host,
                hostname,
                insecureHTTPParser,
                localAddress,
                localPort,
                lookup,
                maxHeaderSize,
                path,
                port,
                protocol,
                setHost,
                socketPath,
                timeout,
                signal,
                method: "TRACE"
            }));
        }

        static patch(url, {
            success = () => {
            },
            error = () => {
            },
            agent,
            auth,
            createConnection,
            defaultPort,
            family,
            headers,
            hints,
            host,
            hostname,
            insecureHTTPParser,
            localAddress,
            localPort,
            lookup,
            maxHeaderSize,
            path,
            port,
            protocol,
            setHost,
            socketPath,
            timeout,
            signal
        }) {
            return new Promise((resolve, reject) => EasyFetch.request(url, {
                success: body => {
                    success(body);
                    resolve(body);
                },
                error: () => {
                    error();
                    reject();
                },
                agent,
                auth,
                createConnection,
                defaultPort,
                family,
                headers,
                hints,
                host,
                hostname,
                insecureHTTPParser,
                localAddress,
                localPort,
                lookup,
                maxHeaderSize,
                path,
                port,
                protocol,
                setHost,
                socketPath,
                timeout,
                signal,
                method: "PATCH"
            }));
        }
    }
}

module.exports = EasyFetch;