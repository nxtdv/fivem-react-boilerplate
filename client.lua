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

RegisterNUICallback("exit_focus", function(data, cb)
    SetNuiFocus(false, false)
    cb({ })
    print("This is call !");
end)

RegisterNUICallback("test_react", function(data, cb)
    SetNuiFocus(false, false)
    cb({ })
end)