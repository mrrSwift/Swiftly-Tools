module.exports = {
    /**
     * @description Objects ready to use for animations
     */
    from: {
        fadeFromBottom: {
            y: 180,
            opacity: 0,
        },
        fadeFromTop: {
            y: -180,
            opacity: 0,
        },
        fadeFromLeft: {
            x: -180,
            opacity: 0,
        },
        fadeFromRight: {
            x: 180,
            opacity: 0,
        },
        fadeIn: {
            opacity: 0,
        },
        fadeScaleIn: {
            opacity: 0,
            scale: 0
        },
        rotateUp: {
            y: 180,
            rotation: 10,
            opacity: 0,
        },
        rotateUpRight: {
            y: 180,
            x: -180,
            rotation: -20,
            opacity: 0,
        },
        rotateUpLeft: {
            y: 180,
            x: 180,
            rotation: 20,
            opacity: 0,
        },
        rotateDown: {
            y: -180,
            rotation: 10,
            opacity: 0,
        },
        rotateDownRight: {
            y: -180,
            x: -180,
            rotation: -20,
            opacity: 0,
        },
        rotateDownLeft: {
            y: -180,
            x: 180,
            rotation: 20,
            opacity: 0,
        },
    },
    /**
     * 
     * @param {Object} defaults Default data for gsap if you want
     * @returns Object for use in gsap
     */
    anime(defaults = {}) {
        let obj = defaults;
        /**
         * 
         * @param {Number} v 
         */
        obj.x = (v) => {
            obj.x = v;
            return obj;
        }
        /**
         * 
         * @param {Number} v 
         */
        obj.y = (v) => {
            obj.y = v;
            return obj;
        }
        /**
         * 
         * @param {Number} v 
         */
        obj.rotation = (v) => {
            obj.rotation = v;
            return obj;
        }
        /**
         * 
         * @param {String} v 
         */
        obj.ease = (v) => {
            obj.ease = v;
            return obj;
        }
        /**
         * 
         * @param {Number} v 
         */
        obj.delay = (v) => {
            obj.delay = v;
            return obj;
        }
        /**
         * 
         * @param {Number} v 
         */
        obj.duration = (v) => {
            obj.duration = v;
            return obj;
        }
        /**
         * 
         * @param {any} v | The value can be true or false, or it can be represented by 1 or 0.
         */
        obj.stagger = (v) => {
            obj.stagger = v;
            return obj;
        }
        /**
         * 
         * @param {Number} v 
         */
        obj.scale = (v) => {
            obj.scale = v;
            return obj;
        }
        /**
         * 
         * @param {Hex} v 
         */
        obj.backgroundColor = (v) => {
            obj.backgroundColor = v;
            return obj;
        }
        return obj;
    },
    /**
 * 
 * @param {Object} defaults Default data for gsap if you want
 * @returns Object for use in gsap scrollTrigger
 */
    scrollTrigger(defaults = {}) {
        let obj = defaults;
        /**
         * 
         * @param {any} v | The class or id of element
         * @returns 
         */
        obj.trigger = (v) => {
            obj.trigger = v;
            return obj;
        }
        /**
         * 
         * @param {any} v | The value can be true or false, or it can be represented by 1 or 0.
         */
        obj.pin = (v) => {
            obj.pin = v;
            return obj;
        }
        /**
         * 
         * @param {any} v | The class or id of element
         * @returns 
         */
        obj.start = (v) => {
            obj.start = v;
            return obj;
        }
        /**
         * 
         * @param {any} v | The value can be true or false, or it can be represented by 1 or 0.
         */
        obj.scrub = (v) => {
            obj.scrub = v;
            return obj;
        }
        /**
         * 
         * @param {any} v | The value can be true or false, or it can be represented by 1 or 0.
         */
        obj.markers = (v) => {
            obj.markers = v;
            return obj;
        }
        /**
         * 
         * @param {any} v | The value can be true or false, or it can be represented by 1 or 0.
         */
        obj.once = (v) => {
            obj.once = v;
            return obj;
        }
        /**
         * 
         * @param {String} v 
         */
        obj.toggleActions = (v) => {
            obj.toggleActions = v;
            return obj;
        }
        /**
         * 
         * @param {any} v 
         * @returns 
         */
        obj.end = (v) => {
            obj.end = v;
            return obj;
        }
        /**
         * 
         * @param {any} v 
         * @returns 
         */
        obj.snap = (v) => {
            obj.snap = v;
            return obj;
        }


    }

}