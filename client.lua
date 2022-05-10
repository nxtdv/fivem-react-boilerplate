local function openPage()
    SetNuiFocus(true, true)
    SendNUIMessage({type = 'SHOW_PAGE'})
end

local function closePage()
    SetNuiFocus(false, false)
    SendNUIMessage({type = 'CLOSE_PAGE'})
end

RegisterCommand("open", function() 
    openPage()
end)

RegisterCommand("close", function() 
    closePage()
end)

RegisterNUICallback("fivem-react-boilerplate", function(data, cb)
    SetNuiFocus(false, false)
    cb({ })
end)