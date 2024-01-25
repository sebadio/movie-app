<script>
    import TextPlaceholder from "./TextPlaceholder.svelte";
</script>

<div class="relative overflow-hidden">
    <div
        class="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat -z-10 blur-md bg-stone-800/50"
    ></div>
    <div
        class="m-auto aspect-video w-auto h-auto lg:h-96 z-10 bg-zinc-950 animate-pulse"
    ></div>
</div>

<div class="flex flex-col gap-8 m-auto p-4 w-[1000px] max-w-[calc(100%-2rem)]">
    <div>
        <TextPlaceholder width="w-full" height="h-[4ch]" />
        <div class="flex flex-wrap gap-4 justify-between items-baseline">
            <TextPlaceholder width="w-[30ch]" height="h-[2ch]" />
            <TextPlaceholder height="h-[2ch]" />
        </div>

        <div class="mt-4 flex flex-wrap gap-4 justify-between items-end">
            <div>
                <TextPlaceholder height="h-[2ch]" />
                <div class="flex flex-wrap gap-x-4 gap-y-1">
                    <TextPlaceholder />
                    <TextPlaceholder />
                    <TextPlaceholder />
                    <TextPlaceholder />
                </div>
            </div>

            <div>
                <TextPlaceholder height="h-[2ch]" />
            </div>
        </div>
    </div>
    <div>
        <TextPlaceholder width="w-[10ch]" height="h-[2ch]" />
        <TextPlaceholder width="w-full" />
        <TextPlaceholder width="w-full" />
        <TextPlaceholder width="w-full" />
        <TextPlaceholder width="w-full" />
        <TextPlaceholder width="w-full" />
        <TextPlaceholder width="w-full" />
        <TextPlaceholder width="w-full" />
        <TextPlaceholder width="w-full" />
    </div>
</div>
