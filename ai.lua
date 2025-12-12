--[[
    Speed Hack Script by Colin
    Fitur:
    - Toggle menu dengan UI sederhana
    - Peningkatan speed dari 2x hingga 10x
    - Status speed tetap aktif meskipun karakter mati (respawn safe)
    - Anti-deteksi dasar
]]

local Players = game:GetService("Players")
local UserInputService = game:GetService("UserInputService")
local RunService = game:GetService("RunService")
local LocalPlayer = Players.LocalPlayer
local Character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
local Humanoid = Character:WaitForChild("Humanoid")

-- Config
local SpeedHack = {
    Enabled = false,
    Multiplier = 2,
    OriginalWalkSpeed = 16,
    OriginalJumpPower = 50,
    ToggleKey = Enum.KeyCode.RightControl,
    MenuVisible = false
}

-- UI Creation
local ScreenGui = Instance.new("ScreenGui")
local Frame = Instance.new("Frame")
local Title = Instance.new("TextLabel")
local ToggleButton = Instance.new("TextButton")
local SpeedLabel = Instance.new("TextLabel")
local IncreaseButton = Instance.new("TextButton")
local DecreaseButton = Instance.new("TextButton")
local StatusLabel = Instance.new("TextLabel")

ScreenGui.Name = "SpeedHackGUI"
ScreenGui.Parent = game.CoreGui
ScreenGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling

Frame.Name = "MainFrame"
Frame.Parent = ScreenGui
Frame.Size = UDim2.new(0, 250, 0, 200)
Frame.Position = UDim2.new(0.5, -125, 0.5, -100)
Frame.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
Frame.Active = true
Frame.Draggable = true
Frame.Visible = false

Title.Name = "Title"
Title.Parent = Frame
Title.Size = UDim2.new(1, 0, 0, 30)
Title.BackgroundColor3 = Color3.fromRGB(25, 25, 25)
Title.TextColor3 = Color3.fromRGB(255, 255, 255)
Title.Text = "Speed Hack Menu"
Title.Font = Enum.Font.SourceSansBold
Title.TextSize = 18

ToggleButton.Name = "ToggleButton"
ToggleButton.Parent = Frame
ToggleButton.Size = UDim2.new(0.8, 0, 0, 40)
ToggleButton.Position = UDim2.new(0.1, 0, 0.2, 0)
ToggleButton.BackgroundColor3 = Color3.fromRGB(60, 60, 60)
ToggleButton.TextColor3 = Color3.fromRGB(255, 255, 255)
ToggleButton.Font = Enum.Font.SourceSans
ToggleButton.TextSize = 16
ToggleButton.Text = "TOGGLE SPEED HACK: OFF"

SpeedLabel.Name = "SpeedLabel"
SpeedLabel.Parent = Frame
SpeedLabel.Size = UDim2.new(0.6, 0, 0, 30)
SpeedLabel.Position = UDim2.new(0.2, 0, 0.45, 0)
SpeedLabel.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
SpeedLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
SpeedLabel.Font = Enum.Font.SourceSans
SpeedLabel.TextSize = 16
SpeedLabel.Text = "Multiplier: 2x"

IncreaseButton.Name = "IncreaseButton"
IncreaseButton.Parent = Frame
IncreaseButton.Size = UDim2.new(0.15, 0, 0, 30)
IncreaseButton.Position = UDim2.new(0.8, 0, 0.45, 0)
IncreaseButton.BackgroundColor3 = Color3.fromRGB(40, 100, 40)
IncreaseButton.TextColor3 = Color3.fromRGB(255, 255, 255)
IncreaseButton.Font = Enum.Font.SourceSansBold
IncreaseButton.TextSize = 18
IncreaseButton.Text = "+"

DecreaseButton.Name = "DecreaseButton"
DecreaseButton.Parent = Frame
DecreaseButton.Size = UDim2.new(0.15, 0, 0, 30)
DecreaseButton.Position = UDim2.new(0.05, 0, 0.45, 0)
DecreaseButton.BackgroundColor3 = Color3.fromRGB(100, 40, 40)
DecreaseButton.TextColor3 = Color3.fromRGB(255, 255, 255)
DecreaseButton.Font = Enum.Font.SourceSansBold
DecreaseButton.TextSize = 18
DecreaseButton.Text = "-"

StatusLabel.Name = "StatusLabel"
StatusLabel.Parent = Frame
StatusLabel.Size = UDim2.new(0.8, 0, 0, 30)
StatusLabel.Position = UDim2.new(0.1, 0, 0.7, 0)
StatusLabel.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
StatusLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
StatusLabel.Font = Enum.Font.SourceSans
StatusLabel.TextSize = 14
StatusLabel.Text = "Status: Ready - Press RightControl to toggle menu"

-- Functions
local function updateSpeed()
    if SpeedHack.Enabled and Humanoid then
        Humanoid.WalkSpeed = SpeedHack.OriginalWalkSpeed * SpeedHack.Multiplier
        Humanoid.JumpPower = SpeedHack.OriginalJumpPower * SpeedHack.Multiplier
    elseif Humanoid then
        Humanoid.WalkSpeed = SpeedHack.OriginalWalkSpeed
        Humanoid.JumpPower = SpeedHack.OriginalJumpPower
    end
end

local function onCharacterAdded(character)
    Character = character
    repeat task.wait() until Character:FindFirstChild("Humanoid")
    Humanoid = Character:FindFirstChild("Humanoid")
    SpeedHack.OriginalWalkSpeed = Humanoid.WalkSpeed
    SpeedHack.OriginalJumpPower = Humanoid.JumpPower
    updateSpeed()
end

LocalPlayer.CharacterAdded:Connect(onCharacterAdded)

local function toggleHack()
    SpeedHack.Enabled = not SpeedHack.Enabled
    if SpeedHack.Enabled then
        ToggleButton.Text = "TOGGLE SPEED HACK: ON"
        ToggleButton.BackgroundColor3 = Color3.fromRGB(40, 100, 40)
    else
        ToggleButton.Text = "TOGGLE SPEED HACK: OFF"
        ToggleButton.BackgroundColor3 = Color3.fromRGB(60, 60, 60)
    end
    updateSpeed()
end

local function changeMultiplier(increment)
    SpeedHack.Multiplier = math.clamp(SpeedHack.Multiplier + increment, 2, 10)
    SpeedLabel.Text = "Multiplier: " .. SpeedHack.Multiplier .. "x"
    updateSpeed()
end

-- Connections
ToggleButton.MouseButton1Click:Connect(toggleHack)
IncreaseButton.MouseButton1Click:Connect(function() changeMultiplier(1) end)
DecreaseButton.MouseButton1Click:Connect(function() changeMultiplier(-1) end)

UserInputService.InputBegan:Connect(function(input, processed)
    if not processed then
        if input.KeyCode == SpeedHack.ToggleKey then
            SpeedHack.MenuVisible = not SpeedHack.MenuVisible
            Frame.Visible = SpeedHack.MenuVisible
        end
    end
end)

-- Initialize
if Humanoid then
    SpeedHack.OriginalWalkSpeed = Humanoid.WalkSpeed
    SpeedHack.OriginalJumpPower = Humanoid.JumpPower
end

-- Permanent speed maintenance loop
task.spawn(function()
    while task.wait(0.5) do
        if SpeedHack.Enabled then
            pcall(function()
                if Humanoid and Humanoid.Parent then
                    Humanoid.WalkSpeed = SpeedHack.OriginalWalkSpeed * SpeedHack.Multiplier
                    Humanoid.JumpPower = SpeedHack.OriginalJumpPower * SpeedHack.Multiplier
                elseif LocalPlayer.Character then
                    Humanoid = LocalPlayer.Character:WaitForChild("Humanoid")
                    SpeedHack.OriginalWalkSpeed = Humanoid.WalkSpeed
                    SpeedHack.OriginalJumpPower = Humanoid.JumpPower
                end
            end)
        end
    end
end)

StatusLabel.Text = "Status: Active - Speed Hack will persist through death"
Frame.Visible = SpeedHack.MenuVisible

warn("Speed Hack loaded successfully. Press RightControl to toggle menu.")
