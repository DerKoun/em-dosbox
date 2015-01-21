// Don't copy canvas image back into RAM in SDL_LockSurface()
Module['screenIsReadOnly'] = true;
// Ensure 4:3 aspect ratio, unless specified otherwise
if (typeof(Module['forcedAspectRatio']) == 'undefined') {
    Module['forcedAspectRatio'] = 4 / 3;
}
