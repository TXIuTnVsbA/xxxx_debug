//t="//ib.365yg.com/video/urls/v/1/toutiao/mp4/da4001a00eb4479a87423727afd7444b"
//t="/video/urls/v/1/toutiao/mp4/da4001a00eb4479a87423727afd7444b"
function debug(t) {
			var r = function() {
                for (var t = 0, n = new Array(256), r = 0; 256 !== r; ++r)
                    t = 1 & (t = 1 & (t = 1 & (t = 1 & (t = 1 & (t = 1 & (t = 1 & (t = 1 & (t = r) ? -306674912 ^ t >>> 1 : t >>> 1) ? -306674912 ^ t >>> 1 : t >>> 1) ? -306674912 ^ t >>> 1 : t >>> 1) ? -306674912 ^ t >>> 1 : t >>> 1) ? -306674912 ^ t >>> 1 : t >>> 1) ? -306674912 ^ t >>> 1 : t >>> 1) ? -306674912 ^ t >>> 1 : t >>> 1) ? -306674912 ^ t >>> 1 : t >>> 1,
                    n[r] = t;
                return "undefined" != typeof Int32Array ? new Int32Array(n) : n
            }()
			e = t + "?r=" + Math.random().toString(10).substring(2);
            var o = function(t) {
                for (var n, e, o = -1, a = 0, c = t.length; a < c; )
                    (n = t.charCodeAt(a++)) < 128 ? o = o >>> 8 ^ r[255 & (o ^ n)] : n < 2048 ? o = (o = o >>> 8 ^ r[255 & (o ^ (192 | n >> 6 & 31))]) >>> 8 ^ r[255 & (o ^ (128 | 63 & n))] : n >= 55296 && n < 57344 ? (n = 64 + (1023 & n),
                    e = 1023 & t.charCodeAt(a++),
                    o = (o = (o = (o = o >>> 8 ^ r[255 & (o ^ (240 | n >> 8 & 7))]) >>> 8 ^ r[255 & (o ^ (128 | n >> 2 & 63))]) >>> 8 ^ r[255 & (o ^ (128 | e >> 6 & 15 | (3 & n) << 4))]) >>> 8 ^ r[255 & (o ^ (128 | 63 & e))]) : o = (o = (o = o >>> 8 ^ r[255 & (o ^ (224 | n >> 12 & 15))]) >>> 8 ^ r[255 & (o ^ (128 | n >> 6 & 63))]) >>> 8 ^ r[255 & (o ^ (128 | 63 & n))];
                return -1 ^ o
            }(e) >>> 0;
            //return (location.protocol.indexOf("http") > -1 ? [location.protocol, n.hostname] : ["http:", n.hostname]).join("//") + e + "&s=" + o
			return e + "&s=" + o
        }
