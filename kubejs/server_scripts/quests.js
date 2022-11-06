onEvent('ftbquests.custom_reward', event => {
    let reward = event.getReward()
    let id = reward.quest.getCodeString()
    if (reward.hasTag('reset')) {
        event.server.schedule(10, () => {
            console.log(`ftbquests change_progress ${event.entity} reset ${id}`)
            event.server.runCommandSilent(`ftbquests change_progress ${event.entity} reset ${id}`)
        })
    }
})