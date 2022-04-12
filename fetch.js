// noinspection JSUnusedGlobalSymbols

const httpAgent = require("_http_agent");
const http = require("http");
const https = require("https");
const fs = require("fs");

class FetchBetter {
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
    static request(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, method, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {const req = (url.startsWith("https:") ? https : http).request(url.startsWith("https://") || url.startsWith("http://") ? url : "http://" + url, {...(hostname ? {hostname} : {}), agent, auth, createConnection, defaultPort, family, headers, hints, host, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, method, path, port, protocol, setHost, socketPath, timeout, signal}, res => {const chunks = [];res.on("error", error);res.on("data", chunk => chunks.push(chunk));res.on("end", () => success(chunks.join("")))});req.end();}
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
    static get(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {FetchBetter.request(url, {success, error, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, method: "GET", path, port, protocol, setHost, socketPath, timeout, signal});}
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
    static post(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {FetchBetter.request(url, {success, error, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, method: "POST", path, port, protocol, setHost, socketPath, timeout, signal});}
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
    static put(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {FetchBetter.request(url, {success, error, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, method: "PUT", path, port, protocol, setHost, socketPath, timeout, signal});}
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
    static delete(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {FetchBetter.request(url, {success, error, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, method: "DELETE", path, port, protocol, setHost, socketPath, timeout, signal});}
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
    static head(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {FetchBetter.request(url, {success, error, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, method: "HEAD", path, port, protocol, setHost, socketPath, timeout, signal});}
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
    static options(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {FetchBetter.request(url, {success, error, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, method: "OPTIONS", path, port, protocol, setHost, socketPath, timeout, signal});}
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
    static patch(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {FetchBetter.request(url, {success, error, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, method: "PATCH", path, port, protocol, setHost, socketPath, timeout, signal})}
    /**
     * @param {string} url
     * @param {string} file
     * @param {Function?} success
     * @param {Function?} error
     */
    static download(url, file, success = r => r, error = r => r) {FetchBetter.request(url, {success: body => {fs.writeFile(file, body, err => {if (err) {error(err)} else {success()}})}, error: err => {error(err)}})}

    static promises = {
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
         * @returns {Promise}
         */
        async request(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, method, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {return await new Promise((resolve, reject) => FetchBetter.request(url, {success: body => resolve(body), error: reject, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, method, path, port, protocol, setHost, socketPath, timeout, signal}))},
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
         * @returns {Promise}
         */
        async get(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {return await new Promise((resolve, reject) => FetchBetter.request(url, {success: body => {success(body);resolve(body)}, error: () => {error();reject()}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal, method: "GET"}))},
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
         * @returns {Promise}
         */
        async post(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {return await new Promise((resolve, reject) => FetchBetter.request(url, {success: body => {success(body);resolve(body)}, error: () => {error();reject()}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal, method: "POST"}))},
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
         * @returns {Promise}
         */
        async head(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {return await new Promise((resolve, reject) => FetchBetter.request(url, {success: body => {success(body);resolve(body)}, error: () => {error();reject()}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal, method: "HEAD"}))},
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
         * @returns {Promise}
         */
        async put(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {return await new Promise((resolve, reject) => FetchBetter.request(url, {success: body => {success(body);resolve(body)}, error: () => {error();reject()}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal, method: "PUT"}))},
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
         * @returns {Promise}
         */
        async delete(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {return await new Promise((resolve, reject) => FetchBetter.request(url, {success: body => {success(body);resolve(body)}, error: () => {error();reject()}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal, method: "DELETE"}))},
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
         * @returns {Promise}
         */
        async connect(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {return await new Promise((resolve, reject) => FetchBetter.request(url, {success: body => {success(body);resolve(body)}, error: () => {error();reject()}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal, method: "CONNECT"}))},
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
         * @returns {Promise}
         */
        async options(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {return await new Promise((resolve, reject) => FetchBetter.request(url, {success: body => {success(body);resolve(body)}, error: () => {error();reject()}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal, method: "OPTIONS"}))},
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
         * @returns {Promise}
         */
        async trace(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {return await new Promise((resolve, reject) => FetchBetter.request(url, {success: body => {success(body);resolve(body)}, error: () => {error();reject()}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal, method: "TRACE"}))},
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
         * @returns {Promise}
         */
        async patch(url, {success = () => {}, error = () => {}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal} = {}) {return await new Promise((resolve, reject) => FetchBetter.request(url, {success: body => {success(body);resolve(body)}, error: () => {error();reject()}, agent, auth, createConnection, defaultPort, family, headers, hints, host, hostname, insecureHTTPParser, localAddress, localPort, lookup, maxHeaderSize, path, port, protocol, setHost, socketPath, timeout, signal, method: "PATCH"}))},
        /**
         * @param {string} url
         * @param {string} file
         * @returns {Promise}
         */
        async download(url, file) {return await new Promise((resolve, reject) => FetchBetter.download(url, file, () => resolve(), () => reject()))}
    }
}

module.exports = FetchBetter;