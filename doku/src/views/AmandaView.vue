<script setup lang="ts">

</script>


<template>
    <div id="wrapper">
        <h1 style="background:green; width:650px;">Amanda Ibrom|KD7</h1>
        <h2>Walkcycles</h2>
        <div class="media">
            <h3>1.1 Walkcycle_Basics</h3>
            <div class="mediaTuple">
                <video autoplay loop src='../assets/Amanda/walkcyle1.mp4' width="581" height="327" />
                <video autoplay loop src='../assets/Amanda/walkcyle2.mp4' width="581" height="327" />
            </div>
            <h3>1.2 Walkcycle_Ausdruck</h3>
            <div class="mediaTuple">
                <video autoplay loop src='../assets/Amanda/walkcycle3.mp4' width="581" height="327" />
                <video autoplay loop src='../assets/Amanda/walkcycle4.mp4' width="581" height="327" />
            </div>
            <h3>1.2 Walkcycle_GroundControl</h3>
            <video autoplay loop src='../assets/Amanda/groundcontrol.mp4' width="1182" height="654" />
            <h3>1.3 Superkurzer Kurzfilm </h3>
            <p style="margin-top: 0;"> In der Endabgabe von unserem ersten Workshop sollten wir einen "Superkurzen Kurzfilm"
                erstellen, in dem wir eine Geschichte mit unseren Kopffüsslern erzählen. In unserem Beispiel haben wir uns
                dafür entschieden vor allem über Ton zu erzählen, wie die anderen Figuren Angst vor dem Horrorhuhn haben und
                es dann ausversehen aufwecken. <br /> Nach dieser Misere müssen sie dann vor dem Huhn flüchten.</p>
            <video controls width="1182">
                <source src="../assets/Allgemein/Superkurzer Kurzfilm_Final.mp4" type="video/mp4">
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
    width: 900px;
}

#wrapper {
    width: 90vw;
    margin-bottom: 50px;
}

.media {
    display: flex;
    flex-direction: column;

    width: 90vw;
    gap: 20px
}

.mediaTuple {
    display: flex;
    flex-direction: row;
    gap: 20px;
}
</style>

