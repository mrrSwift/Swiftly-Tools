module.exports = {

    readyToUse:{
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
    },
    anime(defaults = {}){
        let obj = defaults;

        obj.x = (v)=>{
            obj.x = v;
            return obj;
        }

        obj.y = (v)=>{
            obj.y = v;
            return obj;
        }

        obj.rotation = (v)=>{
            obj.rotation = v;
            return obj;
        }

        obj.ease = (v)=>{
            obj.ease = v;
            return obj;
        }

        obj.delay = (v)=>{
            obj.delay = v;
            return obj;
        }

        obj.duration = (v)=>{
            obj.duration = v;
            return obj;
        }

        obj.stagger = (v)=>{
            obj.stagger = v;
            return obj;
        }

        obj.scale = (v)=>{
            obj.scale = v;
            return obj;
        }
        return obj;
    },
    scrollTrigger(defaults = {}){
        let obj = defaults;

        

    }

}