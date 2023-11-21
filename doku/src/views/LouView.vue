<script setup lang="ts">

</script>


<template>

     <div id="wrapper"> 
            <h1 style="background:hotpink; width:650px;">Luisa Trojan|KD7</h1>
            <h2>Walkcycles</h2>
             <div class="media">
                <h3>1.1 Walkcycle_Basics</h3>
                <div class="mediaTuple">
                    <video autoplay loop src='../assets/Lou/Nomral_walk_9.mp4' width="581" />
                    <video autoplay loop src='../assets/Lou/Normal_walk_17.mp4' width="581" />
                </div>
                <div class="mediaTuple">
                    <video autoplay loop src='../assets/Lou/Oben_walk.mp4' width="581" />    
                    <video autoplay loop src='../assets/Lou/Unten_walk.mp4' width="581" />
                        
                    </div>
                <h3>1.2 Walkcycle_Ausdruck/Groundcontrol</h3>
                <video autoplay loop src='../assets/Lou/Sneak.mp4' width="1182" />
                
                <h3>1.3 Superkurzer Kurzfilm </h3>
                <p style="margin-top: 0;">  In der Endabgabe von unserem ersten Workshop sollten wir einen "Superkurzen Kurzfilm" erstellen, in dem wir eine Geschichte mit unseren Kopffüsslern erzählen. In unserem Beispiel haben wir uns dafür entschieden vor allem über Ton zu erzählen, wie die anderen Figuren Angst vor dem Horrorhuhn haben und es dann ausversehen aufwecken. <br/> Nach dieser Misere müssen sie dann vor dem Huhn flüchten.</p>
                <video controls width="1182">
                    <source src="../assets/Allgemein/Superkurzer Kurzfilm_Final.mp4" type="video/mp4" >
                </video>
            </div>
    
        </div>

</template>


<style scoped>

h2 {
        margin-top: 60px;
    }

    h3 {
        margin-top: 40px;
    }

    p {
        margin-top: 40px;
        width:900px;
    }
    #wrapper{
        width: 90vw;
        margin-bottom: 50px;
    }
    .media{
        display: flex;
        flex-direction: column;
       
        width: 90vw;
        gap: 20px
    }
    .mediaTuple{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

</style>
