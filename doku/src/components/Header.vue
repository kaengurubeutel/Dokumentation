<script setup lang="ts">
import { useRouter } from 'vue-router';
const route = useRouter()
let goHome = () => {
    route.push("/");
}

let goMaxi = () => {
    route.push("/Maxi");
}

let goAmanda = () => {
    route.push("/Amanda");
}

let goLou = () => {
    route.push("/Lou");
}
</script>


<template>
    <nav>
        <div id="logo" @click="goHome">
            <h2 id="logo">2 &<br /> 1/2</h2>
        </div>
        <div id="menu">
            <h2 id="m" @click="goMaxi">Maximilian</h2>
            <h2 id="a" @click="goAmanda">Amanda</h2>
            <h2 id="l" @click="goLou">Luisa</h2>
        </div>
    </nav>
</template>


<style scoped>
nav {
    background-color: #171717;
    margin-top: 20px;
    margin-bottom: 60px;
    display: flex;
    width: 90vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 500;
}

#menu {
    display: flex;
    flex-direction: row;
    gap: 30px;

}

#menu h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 94.784%;
    /* 22.748px */
}

#logo {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 94.784%;
    /* 30.331px */
}

#logo:hover {
    text-shadow: 0px 0px 20.399999618530273px rgba(244, 255, 114, 0.70);
}

#m:hover {
    background-color: blue;
}

#a:hover {
    background-color: green;
}

#l:hover {
    background-color: hotpink;
}
</style>